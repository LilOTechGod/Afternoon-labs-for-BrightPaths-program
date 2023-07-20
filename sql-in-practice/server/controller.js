// require dotenv and all the library with it
require('dotenv').config()
// deconstruct connection string variable from .env so I may use in controllers
const {CONNECTION_STRING} = process.env;
// bring in sequelize 
const Sequelize = require('sequelize');
// new instance says can i connect to that db yes, you can make request
let sequelize = new Sequelize (CONNECTION_STRING, {
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        from cc_appointments a
        join cc_emp_appts ea on a.appt_id = ea.appt_id
        join cc_employees e on e.emp_id = ea.emp_id
        join cc_users u on e.user_id = u.user_id
        where a.approved = true and a.completed = false
        order by a.date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`*****YOUR CODE HERE*****
        
        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId});
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))
    },

    getAllClients: (req, res) => {
        sequelize.query(`
        SELECT*FROM cc_clients as cc
        JOIN cc_users as cu
        ON cc.user_id = cu.user_id;rs
        
        `)

        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.error(err))
    }
}
