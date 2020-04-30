let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let members = [  { 'no': 0, 'id': "P12", 'name': "Sarawur" ,'surname':"Kugimiya" ,'tel':"0814152526"},
                  { 'no': 1, 'id': "P13", 'name': "Weerasak",'surname':"Urassaya"  ,'tel':"0814152526"}
               ];
router.route('/members')
    // get all members
    .get((req, res) => res.json(members))
    // insert a new member
    .post((req, res) => {
    var member = {};
    member.no = members.length > 0 ? members[members.length - 1].no + 1 : 0;
    member.name = req.body.name
    member.surname = req.body.surname
    member.id = req.body.id
    member.tel = req.body.tel

    members.push(member);
    res.json({ message: 'members created!' })
    })
router.route('/members/:member_no')
    .get((req, res) => {
        let no = req.params.member_no
        let index = members.findIndex(member => (member.no === +no))
        res.json(members[index])                   // get a member
    })
    .put((req, res) => {                               // Update a member
        let no = req.params.member_no
        let index = members.findIndex(member => (member.no === +no))
        members[index].name = req.body.name;
        members[index].surname = req.body.surname;
        members[index].id = req.body.id;
        members[index].tel = req.body.tel;
        res.json({ message: 'member updated!' + req.params.member_no });
    })
    .delete((req, res) => {                   // Delete a member
        let no = req.params.member_no
        let index = members.findIndex(member => member.no === +no)
        members.splice(index, 1)
        res.json({ message: 'member deleted: ' + req.params.member_no });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(process.env.PORT || 80, () => console.log("Server is running"));