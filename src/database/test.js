const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  //   await saveOrphanage(db, {
  //     lat: "-10.8958202",
  //     lng: "-37.1680758",
  //     name: "Lar das meninas",
  //     about:
  //       "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
  //     whatsapp: "9898987898",
  //     images: [
  //       "https://images.unsplash.com/photo-1562790519-ee271a69b149?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //       "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     ].toString(),
  //     instructions:
  //       "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //     opening_hours: "Horário de visitas Das 18h até 8h",
  //     open_on_weekends: "1",
  //   });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  //   // deletar dado da tabela
  //   console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"));
  //   console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
