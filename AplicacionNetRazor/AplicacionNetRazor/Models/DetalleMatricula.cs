using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AplicacionNetRazor.Models
{
    public class DetalleMatricula
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int IdMatricula { get; set; }
        [ForeignKey(nameof(IdMatricula))]
        public Matricula Matricula { get; set; }

        [Required]
        public int IdMateria { get; set; }
        [ForeignKey(nameof(IdMateria))]
        public Materia Materia { get; set; }
    }
}
