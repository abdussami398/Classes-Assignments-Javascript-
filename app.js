// Solution of first task

class PersonalAccount {
  constructor(
    firstName,
    lastName,
    income,
    property_expenses,
    totalincome,
    totalexpense
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addincome(income, totalincome);
    this.addexpenses(property_expenses, totalexpense);
  }

  addincome(income, totalincome) {
    this.income = income;
    this.totalincome = totalincome;
  }

  addexpenses(property_expenses, totalexpense) {
    this.property_expenses = property_expenses;
    this.totalexpense = totalexpense;
  }
}

const myself = new PersonalAccount("Abdus", "Sami", 50000, 10000, 40000, 30000);
console.log(myself);

// Second Task Solution

class vehicle {
  constructor(name, model, color, geartype) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.geartype = geartype;
  }

  start() {
    console.log("Your Vehicle is ready for drive");
  }

  opendoor() {
    console.log("Door is opened now");
  }
}

const Mehran = new vehicle("Mehran", 2019, "grey", "manual");
console.log(Mehran);
Mehran.start();
Mehran.opendoor();

class car extends vehicle {
  constructor(name, model, color, geartype, engine, maxspeed) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
  }
}

const ferrari = new car("ferrari", 2022, "red","Auomatic", "2000 CC", "300 KM/H");
console.log(ferrari);

class truck extends vehicle {
  constructor(name, model, color, geartype, engine, maxspeed, braketype) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
    this.braketype = braketype;
  }
}

const mercedes = new truck("mercedes", 2022,"white", "Auomatic", "4500 CC", "200 KM/H","ABS & ADS");
console.log(mercedes);

class bus extends vehicle {
  constructor(
    name,
    model,
    color,
    geartype,
    engine,
    maxspeed,
    braketype,
    seats
  ) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
    this.braketype = braketype;
    this.seats = seats;
  }
}
const Yutong = new bus("Yutong", 2022, "white","Auomatic", "2800 CC", "180 KM/H","ABS & ADS",120);
console.log(Yutong);
