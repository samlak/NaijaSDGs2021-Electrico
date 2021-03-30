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

const apply = async (req, res) => {
    res.render('pages/apply');
}

const sponsor = async (req, res) => {
    res.render('pages/sponsor');
}

const sponsorDetail = async (req, res) => {
    res.render('pages/sponsor-detail');
}

module.exports = {
    login,
    register,
    dashboard,
    homepage,
    apply,
    sponsor,
    sponsorDetail
};