// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface ExigenciaLegal {
//   title: string;
//   subtitle: string;
//   shortText: string;
//   longText: string;
// }

// interface Definicao {
//   title: string;
//   subtitle: string;
//   shortText: string;
//   longText: string;
// }

// interface BaseDadosCadastral {
//   title: string;
//   subtitle: string;
//   shortText: string;
// }

// interface Theme {
//   title: string;
//   subtitle: string;
//   exigenciasLegais: ExigenciaLegal[];
//   definicoes: Definicao[];
//   basesDadosCadastrais: BaseDadosCadastral[];
// }

// interface Category {
//   name: string;
//   themes: Theme[];
// }

// interface ListMockType {
//   name: string;
//   categories: Category[];
// }

// const ListMock: ListMockType[] = [
//   {
//     name: 'Mock 1',
//     categories: [
//       {
//         name: 'Documentos e profissionais técnicos',
//         themes: [
//           {
//             title: 'Tema 1',
//             subtitle: 'Subtítulo do Tema 1',
//             exigenciasLegais: [
//               {
//                 title: 'Título da Exigência Legal 1',
//                 subtitle: 'Subtítulo da Exigência Legal 1',
//                 shortText: 'Texto curto da Exigência Legal 1',
//                 longText: 'Texto longo da Exigência Legal 1'
//               }
//             ],
//             definicoes: [
//               {
//                 title: 'Título da Definição 1',
//                 subtitle: 'Subtítulo da Definição 1',
//                 shortText: 'Texto curto da Definição 1',
//                 longText: 'Texto longo da Definição 1'
//               }
//             ],
//             basesDadosCadastrais: [
//               {
//                 title: 'Título da Base de Dados 1',
//                 subtitle: 'Subtítulo da Base de Dados 1',
//                 shortText: 'Texto curto indicando a fonte da informação da Base de Dados 1'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'Documentos gerais',
//         themes: [
//           {
//             title: 'Tema 2',
//             subtitle: 'Subtítulo do Tema 2',
//             exigenciasLegais: [
//               {
//                 title: 'Título da Exigência Legal 2',
//                 subtitle: 'Subtítulo da Exigência Legal 2',
//                 shortText: 'Texto curto da Exigência Legal 2',
//                 longText: 'Texto longo da Exigência Legal 2'
//               }
//             ],
//             definicoes: [
//               {
//                 title: 'Título da Definição 2',
//                 subtitle: 'Subtítulo da Definição 2',
//                 shortText: 'Texto curto da Definição 2',
//                 longText: 'Texto longo da Definição 2'
//               }
//             ],
//             basesDadosCadastrais: [
//               {
//                 title: 'Título da Base de Dados 2',
//                 subtitle: 'Subtítulo da Base de Dados 2',
//                 shortText: 'Texto curto indicando a fonte da informação da Base de Dados 2'
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];


// @Injectable({
//   providedIn: 'root'
// })
// export class TypeItemService {
//   categories: Category[] = [];

//   ngOnInit() {
//     this.categories = ListMock[0].categories;
//   }
// }