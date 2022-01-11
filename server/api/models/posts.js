const PATH = './data.json';
const fs = require('fs');

class post {

    get() {
        return this.readData();
    }

    getIndividualBlog() {

    }

    add() {

    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

}


module.exports = post;