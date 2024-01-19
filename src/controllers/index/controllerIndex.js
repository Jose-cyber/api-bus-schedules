class Index {
    index(req, res){
       res.status(200).json({service: "api-bus-schedules"})
    }
}

module.exports = Index;