'use strict';
const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, myDatabase) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      console.log(project.title);
      console.log('inside get');
      myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
        done(null, doc);
      });
      
    })
    //Template for json form data:
    // { 
    //   "_id": "5871dda29faedc3491ff93bb",
    //   "issue_title": "Fix error in posting data",
    //   "issue_text": "When we post data it has an error.",
    //   "created_on": "2017-01-08T06:35:14.240Z",
    //   "updated_on": "2017-01-08T06:35:14.240Z",
    //   "created_by": "Joe",
    //   "assigned_to": "Joe",
    //   "open": true,
    //   "status_text": "In QA"
    // }
    
    .post(function (req, res){
      let project = req.params.project;

      console.log(project.title);
      const { issue_title, issue_text, created_by, assigned_to, status_text } = req.body;
      console.log(issue_title);
      
      myDataBase.findOneAndUpdate({ id: profile.id },
      {
        $setOnInsert: {
          id: profile.id,
          name: profile.displayName || 'John Doe',
          photo: profile.photos[0].value || '',
          email: Array.isArray(profile.emails) ? profile.emails[0].value : 'No public email',
          created_on: new Date(),
          provider: profile.provider || ''
        },
        $set: {
          last_login: new Date()
        },
        $inc: {
          login_count: 1
        }
      },
      { upsert: true, new: true}, (err, doc) => {
        return cb(null, doc.value);
      });
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};
