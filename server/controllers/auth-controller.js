const home = async (req, res) => {
    try {
        res.status(200).send('Hello World! from home controller');
    } catch (error) {
        console.error(error);
    }
}
const register = async (req, res) => {
    try {
        res.status(200).send('Please Register! through register controller');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {home, register};