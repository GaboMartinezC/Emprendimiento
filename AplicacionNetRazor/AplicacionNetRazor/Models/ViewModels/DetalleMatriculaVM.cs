namespace AplicacionNetRazor.Models.ViewModels
{
    public class DetalleMatriculaVM
    {
        public Matricula Matricula { get; set; }
        public IEnumerable<DetalleMatricula> DetalleMatricula { get; set; }
    }
}
