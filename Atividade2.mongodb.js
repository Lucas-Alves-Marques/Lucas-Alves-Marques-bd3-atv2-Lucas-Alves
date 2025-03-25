// Atividade 1

const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

//Atividade 2

// const collection = 'bd3-nosql-atv2';

// db.createCollection(collection)

//Atividade 3

// db['bd3-nosql-atv2'].insertMany([
//     {
//       "cod_aluno": 1,
//       "cod_turma": 101,
//       "nome": "Ana Souza",
//       "cpf": "12345678901",
//       "rg": "123456789",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "ana.souza@gmail.com",
//       "data_nascimento": "2005-01-15T10:00:00"
//     },
//     {
//       "cod_aluno": 2,
//       "cod_turma": 102,
//       "nome": "Carlos Oliveira",
//       "cpf": "23456789012",
//       "rg": "234567890",
//       "telefone_aluno": "11998765432",
//       "telefone_responsavel": "11923456789",
//       "email": "carlos.oliveira@yahoo.com",
//       "data_nascimento": "2006-02-20T14:30:00"
//     },
//     {
//       "cod_aluno": 3,
//       "cod_turma": 103,
//       "nome": "Fernanda Costa",
//       "cpf": "34567890123",
//       "rg": "345678901",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "fernanda.costa@hotmail.com",
//       "data_nascimento": "2004-07-12T09:15:00"
//     },
//     {
//       "cod_aluno": 4,
//       "cod_turma": 101,
//       "nome": "Juliana Pereira",
//       "cpf": "45678901234",
//       "rg": "456789012",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "juliana.pereira@gmail.com",
//       "data_nascimento": "2003-03-18T11:20:00"
//     },
//     {
//       "cod_aluno": 5,
//       "cod_turma": 102,
//       "nome": "Pedro Silva",
//       "cpf": "56789012345",
//       "rg": "567890123",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "pedro.silva@outlook.com",
//       "data_nascimento": "2007-11-25T08:45:00"
//     },
//     {
//       "cod_aluno": 6,
//       "cod_turma": 103,
//       "nome": "Marcos Santos",
//       "cpf": "67890123456",
//       "rg": "678901234",
//       "telefone_aluno": "11543210987",
//       "telefone_responsavel": "11565432109",
//       "email": "marcos.santos@gmail.com",
//       "data_nascimento": "2005-05-03T16:30:00"
//     },
//     {
//       "cod_aluno": 7,
//       "cod_turma": 101,
//       "nome": "Luciana Alves",
//       "cpf": "78901234567",
//       "rg": "789012345",
//       "telefone_aluno": "11432109876",
//       "telefone_responsavel": "11454321098",
//       "email": "luciana.alves@yahoo.com",
//       "data_nascimento": "2002-08-19T13:00:00"
//     },
//     {
//       "cod_aluno": 8,
//       "cod_turma": 102,
//       "nome": "Ricardo Rocha",
//       "cpf": "89012345678",
//       "rg": "890123456",
//       "telefone_aluno": "11321098765",
//       "telefone_responsavel": "11343210987",
//       "email": "ricardo.rocha@hotmail.com",
//       "data_nascimento": "2006-09-30T17:45:00"
//     },
//     {
//       "cod_aluno": 9,
//       "cod_turma": 103,
//       "nome": "Beatriz Lima",
//       "cpf": "90123456789",
//       "rg": "901234567",
//       "telefone_aluno": "11210987654",
//       "telefone_responsavel": "11232109876",
//       "email": "beatriz.lima@gmail.com",
//       "data_nascimento": "2007-10-13T12:30:00"
//     },
//     {
//       "cod_aluno": 10,
//       "cod_turma": 101,
//       "nome": "Gabriel Martins",
//       "cpf": "11234567890",
//       "rg": "012345678",
//       "telefone_aluno": "11098765432",
//       "telefone_responsavel": "11012345678",
//       "email": "gabriel.martins@outlook.com",
//       "data_nascimento": "2008-04-22T15:15:00"
//     },
//     {
//       "cod_aluno": 11,
//       "cod_turma": 102,
//       "nome": "Sofia Rocha",
//       "cpf": "22345678901",
//       "rg": "223456789",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "sofia.rocha@gmail.com",
//       "data_nascimento": "2004-05-16T09:00:00"
//     },
//     {
//       "cod_aluno": 12,
//       "cod_turma": 103,
//       "nome": "Daniela Souza",
//       "cpf": "33456789012",
//       "rg": "334567890",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "daniela.souza@gmail.com",
//       "data_nascimento": "2005-12-04T11:30:00"
//     },
//     {
//       "cod_aluno": 13,
//       "cod_turma": 101,
//       "nome": "Thiago Oliveira",
//       "cpf": "44567890123",
//       "rg": "445678901",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "thiago.oliveira@outlook.com",
//       "data_nascimento": "2006-07-20T13:00:00"
//     },
//     {
//       "cod_aluno": 14,
//       "cod_turma": 102,
//       "nome": "Larissa Costa",
//       "cpf": "55678901234",
//       "rg": "556789012",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "larissa.costa@hotmail.com",
//       "data_nascimento": "2007-06-14T10:30:00"
//     },
//     {
//       "cod_aluno": 15,
//       "cod_turma": 103,
//       "nome": "Victor Almeida",
//       "cpf": "66789012345",
//       "rg": "667890123",
//       "telefone_aluno": "11543210987",
//       "telefone_responsavel": "11565432109",
//       "email": "victor.almeida@gmail.com",
//       "data_nascimento": "2008-02-10T14:00:00"
//     },
//     {
//       "cod_aluno": 16,
//       "cod_turma": 101,
//       "nome": "Gabriela Pinto",
//       "cpf": "77890123456",
//       "rg": "778901234",
//       "telefone_aluno": "11432109876",
//       "telefone_responsavel": "11454321098",
//       "email": "gabriela.pinto@yahoo.com",
//       "data_nascimento": "2002-01-29T09:30:00"
//     },
//     {
//       "cod_aluno": 17,
//       "cod_turma": 102,
//       "nome": "Felipe Silva",
//       "cpf": "88901234567",
//       "rg": "889012345",
//       "telefone_aluno": "11321098765",
//       "telefone_responsavel": "11343210987",
//       "email": "felipe.silva@hotmail.com",
//       "data_nascimento": "2004-08-14T17:30:00"
//     },
//     {
//       "cod_aluno": 18,
//       "cod_turma": 103,
//       "nome": "Ricardo Souza",
//       "cpf": "99012345678",
//       "rg": "990123456",
//       "telefone_aluno": "11210987654",
//       "telefone_responsavel": "11232109876",
//       "email": "ricardo.souza@gmail.com",
//       "data_nascimento": "2006-05-21T12:00:00"
//     },
//     {
//       "cod_aluno": 19,
//       "cod_turma": 101,
//       "nome": "Julia Martins",
//       "cpf": "10123456789",
//       "rg": "101234567",
//       "telefone_aluno": "11098765432",
//       "telefone_responsavel": "11012345678",
//       "email": "julia.martins@outlook.com",
//       "data_nascimento": "2005-03-04T13:45:00"
//     },
//     {
//       "cod_aluno": 20,
//       "cod_turma": 102,
//       "nome": "Eduardo Rocha",
//       "cpf": "21234567890",
//       "rg": "212345678",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "eduardo.rocha@gmail.com",
//       "data_nascimento": "2004-12-22T15:30:00"
//     },
//     {
//       "cod_aluno": 21,
//       "cod_turma": 103,
//       "nome": "Luana Lima",
//       "cpf": "32345678901",
//       "rg": "323456789",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "luana.lima@yahoo.com",
//       "data_nascimento": "2003-07-07T10:00:00"
//     },
//     {
//       "cod_aluno": 22,
//       "cod_turma": 101,
//       "nome": "Mariana Costa",
//       "cpf": "43456789012",
//       "rg": "434567890",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "mariana.costa@hotmail.com",
//       "data_nascimento": "2007-09-19T11:20:00"
//     },
//     {
//       "cod_aluno": 23,
//       "cod_turma": 102,
//       "nome": "Lucas Almeida",
//       "cpf": "54567890123",
//       "rg": "545678901",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "lucas.almeida@gmail.com",
//       "data_nascimento": "2006-04-12T13:15:00"
//     },
//     {
//       "cod_aluno": 24,
//       "cod_turma": 103,
//       "nome": "Marcelo Santos",
//       "cpf": "65678901234",
//       "rg": "656789012",
//       "telefone_aluno": "11543210987",
//       "telefone_responsavel": "11565432109",
//       "email": "marcelo.santos@gmail.com",
//       "data_nascimento": "2005-06-18T14:00:00"
//     },
//     {
//       "cod_aluno": 25,
//       "cod_turma": 101,
//       "nome": "Carla Rocha",
//       "cpf": "76789012345",
//       "rg": "767890123",
//       "telefone_aluno": "11432109876",
//       "telefone_responsavel": "11454321098",
//       "email": "carla.rocha@yahoo.com",
//       "data_nascimento": "2004-10-02T09:15:00"
//     },
//     {
//       "cod_aluno": 26,
//       "cod_turma": 102,
//       "nome": "Simone Almeida",
//       "cpf": "87890123456",
//       "rg": "878901234",
//       "telefone_aluno": "11321098765",
//       "telefone_responsavel": "11343210987",
//       "email": "simone.almeida@hotmail.com",
//       "data_nascimento": "2007-02-17T15:45:00"
//     },
//     {
//       "cod_aluno": 27,
//       "cod_turma": 103,
//       "nome": "Rafael Souza",
//       "cpf": "98901234567",
//       "rg": "989012345",
//       "telefone_aluno": "11210987654",
//       "telefone_responsavel": "11232109876",
//       "email": "rafael.souza@gmail.com",
//       "data_nascimento": "2005-09-25T11:00:00"
//     },
//     {
//       "cod_aluno": 28,
//       "cod_turma": 101,
//       "nome": "Carolina Pinto",
//       "cpf": "10012345678",
//       "rg": "100123456",
//       "telefone_aluno": "11098765432",
//       "telefone_responsavel": "11012345678",
//       "email": "carolina.pinto@outlook.com",
//       "data_nascimento": "2007-03-23T14:30:00"
//     },
//     {
//       "cod_aluno": 29,
//       "cod_turma": 102,
//       "nome": "Fábio Silva",
//       "cpf": "21123456789",
//       "rg": "211234567",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "fabio.silva@gmail.com",
//       "data_nascimento": "2008-01-11T12:00:00"
//     },
//     {
//       "cod_aluno": 30,
//       "cod_turma": 103,
//       "nome": "Vitoria Martins",
//       "cpf": "32234567890",
//       "rg": "322345678",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "vitoria.martins@gmail.com",
//       "data_nascimento": "2006-11-30T15:15:00"
//     },
//     {
//       "cod_aluno": 31,
//       "cod_turma": 101,
//       "nome": "Marcos Pereira",
//       "cpf": "43345678901",
//       "rg": "433456789",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "marcos.pereira@outlook.com",
//       "data_nascimento": "2004-05-08T13:30:00"
//     },
//     {
//       "cod_aluno": 32,
//       "cod_turma": 102,
//       "nome": "Carla Santos",
//       "cpf": "54456789012",
//       "rg": "544567890",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "carla.santos@gmail.com",
//       "data_nascimento": "2007-08-18T09:30:00"
//     },
//     {
//       "cod_aluno": 33,
//       "cod_turma": 103,
//       "nome": "André Almeida",
//       "cpf": "65567890123",
//       "rg": "655678901",
//       "telefone_aluno": "11543210987",
//       "telefone_responsavel": "11565432109",
//       "email": "andre.almeida@gmail.com",
//       "data_nascimento": "2003-04-12T10:00:00"
//     },
//     {
//       "cod_aluno": 34,
//       "cod_turma": 101,
//       "nome": "Tatiane Lima",
//       "cpf": "76678901234",
//       "rg": "766789012",
//       "telefone_aluno": "11432109876",
//       "telefone_responsavel": "11454321098",
//       "email": "tatiane.lima@yahoo.com",
//       "data_nascimento": "2004-12-25T12:45:00"
//     },
//     {
//       "cod_aluno": 35,
//       "cod_turma": 102,
//       "nome": "Leonardo Rocha",
//       "cpf": "87789012345",
//       "rg": "877890123",
//       "telefone_aluno": "11321098765",
//       "telefone_responsavel": "11343210987",
//       "email": "leonardo.rocha@hotmail.com",
//       "data_nascimento": "2008-06-05T11:15:00"
//     },
//     {
//       "cod_aluno": 36,
//       "cod_turma": 103,
//       "nome": "Aline Martins",
//       "cpf": "98890123456",
//       "rg": "988901234",
//       "telefone_aluno": "11210987654",
//       "telefone_responsavel": "11232109876",
//       "email": "aline.martins@gmail.com",
//       "data_nascimento": "2005-09-16T08:45:00"
//     },
//     {
//       "cod_aluno": 37,
//       "cod_turma": 101,
//       "nome": "Júlio Souza",
//       "cpf": "10101234567",
//       "rg": "101012345",
//       "telefone_aluno": "11098765432",
//       "telefone_responsavel": "11012345678",
//       "email": "julio.souza@outlook.com",
//       "data_nascimento": "2006-12-21T15:30:00"
//     },
//     {
//       "cod_aluno": 38,
//       "cod_turma": 102,
//       "nome": "Larissa Martins",
//       "cpf": "21212345678",
//       "rg": "212123456",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "larissa.martins@gmail.com",
//       "data_nascimento": "2008-04-07T13:15:00"
//     },
//     {
//       "cod_aluno": 39,
//       "cod_turma": 103,
//       "nome": "Vera Rocha",
//       "cpf": "32323456789",
//       "rg": "323234567",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "vera.rocha@gmail.com",
//       "data_nascimento": "2007-10-11T14:00:00"
//     },
//     {
//       "cod_aluno": 40,
//       "cod_turma": 101,
//       "nome": "Rogério Almeida",
//       "cpf": "43434567890",
//       "rg": "434345678",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "rogerio.almeida@outlook.com",
//       "data_nascimento": "2005-05-15T10:45:00"
//     },
//     {
//       "cod_aluno": 41,
//       "cod_turma": 102,
//       "nome": "Raul Souza",
//       "cpf": "54545678901",
//       "rg": "545456789",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "raul.souza@gmail.com",
//       "data_nascimento": "2007-01-30T13:00:00"
//     },
//     {
//       "cod_aluno": 42,
//       "cod_turma": 103,
//       "nome": "Débora Costa",
//       "cpf": "65656789012",
//       "rg": "656567890",
//       "telefone_aluno": "11543210987",
//       "telefone_responsavel": "11565432109",
//       "email": "debora.costa@gmail.com",
//       "data_nascimento": "2006-09-11T12:00:00"
//     },
//     {
//       "cod_aluno": 43,
//       "cod_turma": 101,
//       "nome": "Paula Rocha",
//       "cpf": "76767890123",
//       "rg": "767678901",
//       "telefone_aluno": "11432109876",
//       "telefone_responsavel": "11454321098",
//       "email": "paula.rocha@yahoo.com",
//       "data_nascimento": "2008-05-07T15:45:00"
//     },
//     {
//       "cod_aluno": 44,
//       "cod_turma": 102,
//       "nome": "Thiago Costa",
//       "cpf": "87878901234",
//       "rg": "878789012",
//       "telefone_aluno": "11321098765",
//       "telefone_responsavel": "11343210987",
//       "email": "thiago.costa@gmail.com",
//       "data_nascimento": "2005-12-16T10:00:00"
//     },
//     {
//       "cod_aluno": 45,
//       "cod_turma": 103,
//       "nome": "Silvia Almeida",
//       "cpf": "98989012345",
//       "rg": "989890123",
//       "telefone_aluno": "11210987654",
//       "telefone_responsavel": "11232109876",
//       "email": "silvia.almeida@gmail.com",
//       "data_nascimento": "2004-09-03T13:15:00"
//     },
//     {
//       "cod_aluno": 46,
//       "cod_turma": 101,
//       "nome": "Alana Martins",
//       "cpf": "10012345678",
//       "rg": "100123456",
//       "telefone_aluno": "11098765432",
//       "telefone_responsavel": "11012345678",
//       "email": "alana.martins@outlook.com",
//       "data_nascimento": "2005-10-19T14:30:00"
//     },
//     {
//       "cod_aluno": 47,
//       "cod_turma": 102,
//       "nome": "Fábio Almeida",
//       "cpf": "21123456789",
//       "rg": "211234567",
//       "telefone_aluno": "11987654321",
//       "telefone_responsavel": "11912345678",
//       "email": "fabio.almeida@gmail.com",
//       "data_nascimento": "2008-07-12T13:00:00"
//     },
//     {
//       "cod_aluno": 48,
//       "cod_turma": 103,
//       "nome": "Eduardo Rocha",
//       "cpf": "32234567890",
//       "rg": "322345678",
//       "telefone_aluno": "11876543210",
//       "telefone_responsavel": "11898765432",
//       "email": "eduardo.rocha@yahoo.com",
//       "data_nascimento": "2004-11-02T12:15:00"
//     },
//     {
//       "cod_aluno": 49,
//       "cod_turma": 101,
//       "nome": "Ricardo Pinto",
//       "cpf": "43345678901",
//       "rg": "433456789",
//       "telefone_aluno": "11765432109",
//       "telefone_responsavel": "11787654321",
//       "email": "ricardo.pinto@gmail.com",
//       "data_nascimento": "2006-06-28T10:00:00"
//     },
//     {
//       "cod_aluno": 50,
//       "cod_turma": 102,
//       "nome": "Luana Souza",
//       "cpf": "54456789012",
//       "rg": "544567890",
//       "telefone_aluno": "11654321098",
//       "telefone_responsavel": "11676543210",
//       "email": "luana.souza@hotmail.com",
//       "data_nascimento": "2003-03-14T09:45:00"
//     }
//   ]
//   )

// db['bd3-nosql-atv2'].find();


// Atividade 4 (a)

// db['bd3-nosql-atv2'].find({"cod_aluno": 34});

// db['bd3-nosql-atv2'].updateOne(

//     {"cod_aluno": 34},

//     {
//         $set:{
//                 "cod_turma": 504,
//                 "nome": "Carlos Marques",
//                 "cpf": "77766655588",
//                 "rg": "59635842",
//                 "telefone_aluno": "11985683181",
//                 "telefone_responsavel": "11968538913",
//                 "email": "calinhos.mano@yahoo.com",
//                 "data_nascimento": "2001-25-25T12:45:00"
//             }
//     }
// )

// Atividade 4 (b)

// db['bd3-nosql-atv2'].deleteOne(

//     {"cod_aluno": 40},

// );

// db['bd3-nosql-atv2'].find({"cod_aluno": 40});

// db['bd3-nosql-atv2'].find();

// Atividade 4 (c)

// db['bd3-nosql-atv2'].find({"email":/@gmail/i});



