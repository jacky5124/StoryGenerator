/**
 * Created by Jackist on 10/1/16.
 */
module.exports = function (app, model) {
    app.post('/contact', function (req, res) {
        var contact = req.body;
        model
            .createContact(contact)
            .then(function (success) {
                res.send("success");
            }, function (error) {
                res.status(400).send(error);
            });
    });
};