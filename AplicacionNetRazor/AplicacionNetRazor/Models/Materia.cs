using System.ComponentModel.DataAnnotations;

namespace AplicacionNetRazor.Models
{
    public class Materia
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public float Costo { get; set; }
    }
}
