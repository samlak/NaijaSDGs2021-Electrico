const login = async (req, res) => {
    res.render('pages/login');
}

const register = async (req, res) => {
    res.render('pages/register');
}

const dashboard = async (req, res) => {
    res.render('pages/dashboard');
}

const homepage = async (req, res) => {
    res.render('pages/homepage');
}

module.exports = {
    login,
    register,
    dashboard,
    homepage
};