using AplicacionNetRazor.Datos.Repositorio.IRepositorio;
using AplicacionNetRazor.Models;
using Microsoft.AspNetCore.Mvc;
using AplicacionNetRazor.Models.ViewModels;

namespace AplicacionNetRazor.Controllers
{
    public class MatriculaController : Controller
    {
        private readonly IMatriculaRepositorio _repo;
        private readonly IDetalleRepositorio _repoDetalle;
        public MatriculaController(IMatriculaRepositorio repo, IDetalleRepositorio repoDetalle)
        {
            _repo = repo;
            _repoDetalle = repoDetalle;
        }

        public IActionResult Index()
        {
            IEnumerable<Matricula> model = _repo.ObtenerTodos(incluirPropiedades: "Estudiante,Usuario");
            return View(model);
        }

        public IActionResult Detalle(int id)
        {
            DetalleMatriculaVM model = new DetalleMatriculaVM()
            {
                Matricula = _repo.ObtenerPrimero(m => m.Id == id),
                DetalleMatricula = _repoDetalle.ObtenerTodos(d => d.IdMatricula == id, incluirPropiedades: "Materia"),
            };
            return View(model);
        }
    }
}
