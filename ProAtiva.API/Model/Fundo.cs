
//using System.ComponentModel.DataAnnotations;

namespace ProAtiva.API.Model
{
    public class Fundo
    {
        //[Key]
        public int Id { get; set; }
        public string FundoId { get; set; }

        public string NomeFundo { get; set; }

        public string CnpjFundo { get; set; }

        public decimal InvestimentoInicialMin { get; set; }
    }
}