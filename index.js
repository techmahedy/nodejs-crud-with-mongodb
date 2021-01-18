
var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://node_demo_one:908494i<3u@cluster0.pdhev.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function(error, client) {
    error ? console.log("Failed!") : console.log("Connect successfully!");
    //insertData(client);
    //deleteItem(client);
    //deleteAllItem(client);
    //findData(client);
    //findDataWithCondition(client);
    //findDataAll(client);
    //findDataByProjection(client);
    //findDataByQuery(client);
    findDataByLimit(client);
});

function insertData(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");

    var data = {
        name: "Mahedi Hasan",
        role: "150101"
    };

    collection.insertOne(data, function(error){
        error ? console.log("Failed!") : console.log("Insert successfully!");
    });
}

function deleteItem(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var deleteId = {
        role: "150101"
    };
    collection.deleteOne(deleteId, error => {
        error ? console.log("Failed!") : console.log("Delete successfully!");
    });
}

function deleteAllItem(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    collection.deleteMany((error, object) => {
        error ? console.log("Failed!") : console.log("All data deleted!!");
    });
}

function findData(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var findObj = {};
    collection.findOne(findObj, (error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataWithCondition(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var findObj = {"role":"150102"};
    collection.findOne(findObj, (error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataAll(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    collection.find().toArray((error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataByProjection(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var obejct = {};
    var projection = {projection:{role:""}};

    collection.find(obejct,projection).toArray((error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataByQuery(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var query = {name: "Mahedi Hasan"};

    collection.find(query).toArray((error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataByLimit(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");

    collection.find().limit(1).toArray((error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}

function findDataBySort(client)
{
    var database = client.db("school");
    var collection = database.collection("lists");
    var pattern = {role:1};
    collection.find().sort(pattern).toArray((error,result) => {
        error ? console.log("Failed!") : console.log(result);
    });
}