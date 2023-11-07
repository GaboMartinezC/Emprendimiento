using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AplicacionNetRazor.Models
{
    public class Matricula
    {
        [Key]
        public int Id { get; set; }

        public int IdEstudiante { get; set; }
        [ForeignKey(nameof(IdEstudiante))]
        public virtual Estudiante? Estudiante { get; set; }
        public int IdUsuario { get; set; }
        [ForeignKey(nameof(IdUsuario))]
        public virtual Usuario? Usuario { get; set; }
        public DateTime FechaCreacion { get; set; }
        public string Estado { get; set; }
        public double Costo { get; set; }
    }
}
