using Microsoft.EntityFrameworkCore.Migrations;

namespace ProAtiva.API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fundos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FundoId = table.Column<string>(nullable: true),
                    NomeFundo = table.Column<string>(nullable: true),
                    CnpjFundo = table.Column<string>(nullable: true),
                    InvestimentoInicialMin = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fundos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fundos");
        }
    }
}
