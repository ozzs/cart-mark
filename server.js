const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { Dvr } = require("@mui/icons-material");
const port = 5000;

const sqlite3 = require("sqlite3").verbose();

const logIfError = (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
};

const db = new sqlite3.Database(
  "./shopListDB.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    logIfError(err);

    console.log("connection with database successful");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname,"build")));

app.get("/createlist", (req, res) => {
  db.all("SELECT * FROM PRODUCTS ORDER BY name", [], (err, products) => {
    logIfError(err);

    products.forEach((prod) => {
      console.log(prod);
    });
    res.send(products);
  });
});

app.get("/showlists", (req, res) => {
  db.all(
    "SELECT Date FROM SHOPPING_LISTS WHERE Status = 0",
    [],
    (err, dates) => {
      logIfError(err);

      dates.forEach((date) => {
        console.log(date);
      });
      res.send(dates);
    }
  );
});

app.post("/additem", (req, res) => {
  db.run("INSERT INTO PRODUCTS(name, department, units) VALUES (?, ?, ?)", [
    req.body.product,
    req.body.department,
    req.body.units,
  ]),
    (err) => {
      if (err) {
        res.send({ inserted: false });
        return console.error(err.message);
      }
    };
  res.send({ inserted: true });
});

app.get("/closelist", (req, res) => {
  res.send("CLOSE LIST");
});

app.post("/closelist", (req, res) => {
  db.get("SELECT 1 FROM SHOPPING_LISTS WHERE Status = 1", (err, check) => {
    logIfError(err);

    if (check === undefined) {
      console.log("NO LIST EXISTS");
      db.run("INSERT INTO SHOPPING_LISTS(Date, Status) VALUES (DATE(), 1)"),
        (err) => {
          logIfError(err);
          res.send(req.body.map((product) => product.id));
        };

      db.get("SELECT ID FROM SHOPPING_LISTS WHERE Status = 1", (err, id) => {
        logIfError(err);

        console.log("ID is:", id);

        req.body.forEach((product) => {
          db.run(
            "INSERT INTO RELATIONAL(ListID, ProductID, Amount, Comment) VALUES(?, ?, ?, ?)",
            [id.ID, product.id, product.amount, product.comment]
          ),
            (err) => {
              logIfError(err);
            };
        });
      });
    } else {
      console.log("LIST EXISTS!");
      db.get("SELECT ID FROM SHOPPING_LISTS WHERE Status = 1", (err, id) => {
        logIfError(err);

        console.log("ID is:", id);

        req.body.map((product) => {
          db.run(
            "INSERT INTO RELATIONAL(ListID, ProductID, Amount, Comment) VALUES(?, ?, ?, ?)",
            [id.ID, product.id, product.amount, product.comment]
          ),
            (err) => {
              logIfError(err);
            };
        });
      });
    }
  });
  res.send("DONE!");
});

app.get("/shoppinglist", (req, res) => {
  db.all(
    "SELECT PRODUCTS.ID, PRODUCTS.name, PRODUCTS.department, RELATIONAL.Amount, PRODUCTS.units, RELATIONAL.Comment \
	          FROM PRODUCTS \
		          INNER JOIN RELATIONAL ON PRODUCTS.ID = RELATIONAL.ProductID \
		          INNER JOIN SHOPPING_LISTS ON SHOPPING_LISTS.ID = RELATIONAL.ListID WHERE Status = 1",
    [],
    (err, list) => {
      logIfError(err);

      list.forEach((prod) => {
        console.log(prod);
      });
      res.send(list);
    }
  );
});

app.post("/finishshopping", (req, res) => {
  db.run("UPDATE SHOPPING_LISTS SET Status = 0 WHERE Status = 1"),
    (err) => {
      logIfError(err);
      res.send("Status updated to 0!");
    };
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
