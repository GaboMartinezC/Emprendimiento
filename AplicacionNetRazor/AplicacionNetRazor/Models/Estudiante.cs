using System.ComponentModel.DataAnnotations;

namespace AplicacionNetRazor.Models
{
    public class Estudiante
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
    }
}
