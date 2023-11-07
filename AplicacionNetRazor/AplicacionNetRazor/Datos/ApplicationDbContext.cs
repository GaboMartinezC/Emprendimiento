using AplicacionNetRazor.Models;
using Microsoft.EntityFrameworkCore;

namespace AplicacionNetRazor.Datos
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> option): base(option) 
        {}
        DbSet<Materia> Materia { get; set; }
        DbSet<Estudiante> Estudiante { get; set; }
        DbSet<Usuario> Usuario { get; set; }
        DbSet<Matricula> Matricula { get; set; }
        DbSet<DetalleMatricula> DetalleMatricula { get; set; }
    }
}
