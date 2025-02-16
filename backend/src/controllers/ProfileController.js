import connection from '../database/connection';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidentes = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidentes);
  }
}
export default new ProfileController();
