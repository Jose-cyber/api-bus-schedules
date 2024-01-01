class Index {
    index(req, res){
       res.status(500).json({service: "api-bus-schedules"})
    }
}

module.exports = Index;