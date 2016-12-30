use admin
db.createUser(
    {
        user: "SuperAdmin",
        pwd: "superadmin",
        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ,{ role: "readWrite", db: "kasse" }]
    }
)
