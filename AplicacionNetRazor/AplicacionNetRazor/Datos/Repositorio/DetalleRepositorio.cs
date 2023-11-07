using AplicacionNetRazor.Datos.Repositorio.IRepositorio;
using AplicacionNetRazor.Models;

namespace AplicacionNetRazor.Datos.Repositorio
{
    public class DetalleRepositorio : Repositorio<DetalleMatricula>, IDetalleRepositorio
    {
        private readonly ApplicationDbContext _db;
        public DetalleRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

    }
}
