using AplicacionNetRazor.Datos.Repositorio.IRepositorio;
using AplicacionNetRazor.Models;

namespace AplicacionNetRazor.Datos.Repositorio
{
    public class MatriculaRepositorio : Repositorio<Matricula>, IMatriculaRepositorio
    {
        private readonly ApplicationDbContext _db;
        public MatriculaRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
    }
}
