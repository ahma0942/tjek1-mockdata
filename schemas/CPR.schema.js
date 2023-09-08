module.exports = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  description: "PersonMedium - DLS Version 3.2.1",
  properties: {
    Personer: {
      title: "Personer",
      type: "array",
      minItems: 10,
      maxItems: 20,
      items: {
        type: "object",
        properties: {
          Person: {
            type: "object",
            title: "Person",
            properties: {
              id: {
                title: "id",
                description: "EAID_9AB90AE0_9F85_4164_9B25_8EB2139D65A5",
                type: "string",
                faker: "string.uuid",
              },
              cprfoedselsregistreringsstedskode: {
                title: "cprfoedselsregistreringsstedskode",
                type: "string",
                description: "EAID_890B9C20_B2B8_4930_A344_EED0AF95E2F2",
              },
              cprfoedselsregistreringsstedsnavn: {
                title: "cprfoedselsregistreringsstedsnavn",
                type: "string",
                description: "EAID_F0A1C86C_88C4_45c6_9B69_28BB45A4702F",
              },
              supplerendeFoedselsregistreringssted: {
                title: "supplerendeFoedselsregistreringssted",
                type: ["string"],
                description: "EAID_218AD03D_4161_4849_BACE_DBFEB26F6113",
              },
              foedselsdato: {
                $ref: "#/definitions/foedselsdato",
                description: "EAID_73A30E1A_3B25_4e2a_A0A0_3CFA34BBB97B",
              },
              foedselsdatoUsikkerhedsmarkering: {
                title: "foedselsdatoUsikkerhedsmarkering",
                description: "EAID_01234969_FFF0_4963_873C_711C364B53A7",
                type: "boolean",
              },
              koen: {
                title: "koen",
                description: "EAID_dstF7A403_40CF_47c0_B8E8_819BC58A1DC4",
                type: "string",
                enum: ["kvinde", "mand"],
              },
              stilling: {
                title: "stilling",
                description: "EAID_9581CAC7_2F9F_4426_9EC6_3767FA27ECB4",
                type: ["string"],
              },
              statusdato: {
                title: "statusdato",
                description: "EAID_1CB4F47F_E13B_4440_9297_8F25FEC71C49",
                type: "string",
                format: "date-time",
              },
              statusdatoUsikkerhedsmarkering: {
                title: "statusdatoUsikkerhedsmarkering",
                description: "EAID_EFF81ED0_3AE0_4535_B0B5_AC4F29FDD5A7",
                type: "boolean",
              },
              status: {
                $ref: "#/definitions/PersonStatus",
                description: "EAID_dstB8BFA9_D6E2_43e8_AF38_A6C1F0174C5A",
              },
              Beskyttelser: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Beskyttelse: {
                      $ref: "#/definitions/Beskyttelse",
                      description: "EAID_dst8F2337_8084_47ad_87AD_6661D7ACDDB5",
                    },
                  },
                },
              },
              Personnumre: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Personnummer: {
                      $ref: "#/definitions/Personnummer",
                      description: "EAID_665E1A38_7A6A_41ab_A32B_B0DACA10757E",
                    },
                  },
                  required: ["Personnummer"],
                },
              },
              Navne: {
                title: "Navne",
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Navn: {
                      $ref: "#/definitions/Navn",
                      description: "EAID_dstE45817_FD1E_4a55_A20E_0A3EEBC580F0",
                    },
                  },
                  required: ["Navn"],
                },
              },
              UdrejseIndrejser: {
                title: "UdrejseIndrejser",
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    UdrejseIndrejse: {
                      $ref: "#/definitions/UdrejseIndrejse",
                      description: "EAID_dst0CFADD_06AD_4f98_B616_33D3716849E1",
                    },
                  },
                },
              },
              Adresseoplysninger: {
                title: "Adresseoplysninger",
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Adresseoplysninger: {
                      $ref: "#/definitions/Adresseoplysninger",
                      description: "EAID_dst56392A_9FBF_4da9_8527_FBE1B63C7EDA",
                    },
                  },
                },
              },
            },
            additionalProperties: false,
            required: [
              "id",
              "foedselsdato",
              "foedselsdatoUsikkerhedsmarkering",
              "koen",
              "status",
              "statusdato",
              "statusdatoUsikkerhedsmarkering",
              "Personnumre",
              "Adresseoplysninger",
              "Navne",
            ],
          },
        },
        required: ["Person"],
      },
    },
  },
  required: ["Personer"],
  definitions: {
    PersonStatus: {
      title: "PersonStatus",
      type: "string",
      enum: [
        "annulleret",
        "bopael_i_danmark",
        "bopael_i_danmark_hoej_vejkode",
        "bopael_i_groenland",
        "bopael_i_groenland_hoej_vejkode",
        "doed",
        "ej_bopael",
        "forsvundet",
        "nedlagt_person",
        "udrejst",
      ],
    },
    Status: {
      title: "Status",
      type: "string",
      enum: ["aktuel", "fortrudt", "historisk", "rettet", "teknisk_aendring"],
    },
    foedselsdato: {
      title: "foedselsdato",
      type: "string",
      format: "date-time",
    },
    Foraelder: {
      title: "Foraelder",
      type: ["object"],
      properties: {
        Navn: {
          $ref: "#/definitions/Navn",
          description: "EAID_dstE45817_FD1E_4a55_A20E_0A3EEBC580F0",
          comment: "REF UUID er forælderen som persons reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          description: "EAID_dst56392A_9FBF_4da9_8527_FBE1B63C7EDA",
          comment: "Adresseoplysninger på forælderen såfremt de er til stede",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          description: "EAID_dst0CFADD_06AD_4f98_B616_33D3716849E1",
          comment: "UdrejseIndrejse såfremt de er til stede",
        },
        Kontaktadresse: {
          title: "Kontaktadresse",
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dst19482F_9A6C_41e7_9DEE_D7B297BAA34E",
          comment: "Aktuel kontaktadresse på forælderen såfremt den er til stede",
        },
        Forsvinding: {
          title: "Aktuel Forsvinding",
          $ref: "#/definitions/Forsvinding",
          description: "EAID_dst9D8AA8_1C30_435a_B114_4A45C92058E6",
          comment: "Aktuel forsvinding på forælderen såfremt den er til stede",
        },
        foraelderPersonId: {
          title: "foraelderPersonId",
          type: "string",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        foraelderPersonnummer: {
          title: "foraelderPersonnummer",
          type: "string",
          description: "TRANSIENT",
        },
        Beskyttelser: {
          title: "Beskyttelser",
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
                description: "EAID_dst8F2337_8084_47ad_87AD_6661D7ACDDB5",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["foraelderPersonId", "foraelderPersonnummer"],
    },
    ForaelderReference: {
      title: "ForaelderReference",
      type: ["object"],
      properties: {
        foraelderPersonId: {
          title: "foraelderPersonId",
          type: "string",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        foraelderPersonnummer: {
          title: "foraelderPersonnummer",
          type: "string",
          description: "TRANSIENT",
        },
      },
      additionalProperties: false,
      required: ["foraelderPersonId", "foraelderPersonnummer"],
    },
    Foraelderoplysning: {
      title: "Foraelderoplysning",
      type: ["object"],
      properties: {
        Foraelder: {
          $ref: "#/definitions/Foraelder",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        ForaelderUdenCpr: {
          title: "ForaelderUdenCpr",
          type: ["object"],
          properties: {
            foraelderNavn: {
              title: "foraelderNavn",
              type: ["string"],
              description: "EAID_C1FA9AB2_094F_434f_82F0_1CB3B4386955",
            },
            foraelderNavnemarkering: {
              $ref: "#/definitions/Navnemarkering",
              description: "EAID_dstC1F489_D20F_46e8_A7F5_A625AF29BA12",
            },
            foraelderFoedselsdato: {
              title: "foraelderFoedselsdato",
              type: ["string"],
              description: "EAID_D1610644_C3F3_4ce2_8508_8F1DFC4F9EA4",
              format: "date-time",
            },
            foraelderFoedselsdatoUsikkerhedsmarkering: {
              title: "foraelderFoedselsdato",
              type: ["boolean"],
              description: "EAID_81C99C34_E0FB_4fb5_A3E9_ED6732F74194",
            },
          },
        },
        ForaelderRolle: {
          title: "ForaelderRolle",
          type: "string",
          description: "EAID_dstD4ECB2_D55A_4e6b_961F_ACA4F7C401B8",
          enum: ["mor", "far_medmor"],
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C10A9A75_5FC0_4b24_95E7_2652DF46441E",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_28DDF5A4_198C_4304_97D6_F362D0183B4D",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "ForaelderRolle"],
      oneOf: [{ required: ["Foraelder"] }, { required: ["ForaelderUdenCpr"] }],
    },
    ForaelderoplysningMedReference: {
      title: "ForaelderoplysningMedReference",
      type: ["object"],
      properties: {
        Foraelder: {
          $ref: "#/definitions/ForaelderReference",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        ForaelderUdenCpr: {
          title: "ForaelderUdenCpr",
          type: ["object"],
          properties: {
            foraelderNavn: {
              title: "foraelderNavn",
              type: ["string"],
              description: "EAID_C1FA9AB2_094F_434f_82F0_1CB3B4386955",
            },
            foraelderNavnemarkering: {
              $ref: "#/definitions/Navnemarkering",
              description: "EAID_dstC1F489_D20F_46e8_A7F5_A625AF29BA12",
            },
            foraelderFoedselsdato: {
              title: "foraelderFoedselsdato",
              type: ["string"],
              description: "EAID_D1610644_C3F3_4ce2_8508_8F1DFC4F9EA4",
              format: "date-time",
            },
            foraelderFoedselsdatoUsikkerhedsmarkering: {
              title: "foraelderFoedselsdato",
              type: ["boolean"],
              description: "EAID_81C99C34_E0FB_4fb5_A3E9_ED6732F74194",
            },
          },
        },
        ForaelderRolle: {
          title: "ForaelderRolle",
          type: "string",
          description: "EAID_dstD4ECB2_D55A_4e6b_961F_ACA4F7C401B8",
          enum: ["mor", "far_medmor"],
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C10A9A75_5FC0_4b24_95E7_2652DF46441E",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_28DDF5A4_198C_4304_97D6_F362D0183B4D",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "ForaelderRolle"],
      oneOf: [{ required: ["Foraelder"] }, { required: ["ForaelderUdenCpr"] }],
    },
    Foraeldermyndig: {
      title: "Foraeldermyndig",
      type: ["object"],
      properties: {
        foraeldermyndighedPersonId: {
          title: "foraeldermyndighedPersonId",
          type: ["string"],
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        foraeldermyndighedPersonnummer: {
          title: "foraeldermyndighedPersonnummer",
          type: ["string"],
          description: "TRANSIENT",
        },
        Navn: {
          $ref: "#/definitions/Navn",
          description: "EAID_dstE45817_FD1E_4a55_A20E_0A3EEBC580F0",
          comment: "Den myndiges reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          description: "EAID_dst56392A_9FBF_4da9_8527_FBE1B63C7EDA",
          comment: "Den myndiges reference til Adresseoplysninger",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          description: "EAID_dst0CFADD_06AD_4f98_B616_33D3716849E1",
          comment: "Den myndiges reference til UdrejseIndrejse",
        },
        Kontaktadresse: {
          title: "Kontaktadresse",
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dst19482F_9A6C_41e7_9DEE_D7B297BAA34E",
          comment: "Aktuel kontaktadresse på den myndige såfremt den er til stede",
        },
        Forsvinding: {
          title: "Aktuel Forsvinding",
          $ref: "#/definitions/Forsvinding",
          description: "EAID_dst9D8AA8_1C30_435a_B114_4A45C92058E6",
          comment: "Aktuel forsvinding på den myndige såfremt den er til stede",
        },
        Beskyttelser: {
          title: "Beskyttelser",
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
                description: "EAID_dst8F2337_8084_47ad_87AD_6661D7ACDDB5",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["foraeldermyndighedPersonId", "foraeldermyndighedPersonnummer"],
    },
    ForaeldermyndigReference: {
      title: "Foraeldermyndig",
      type: ["object"],
      properties: {
        foraeldermyndighedPersonId: {
          title: "foraeldermyndighedPersonId",
          type: ["string"],
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        foraeldermyndighedPersonnummer: {
          title: "foraeldermyndighedPersonnummer",
          type: ["string"],
          description: "TRANSIENT",
        },
      },
      additionalProperties: false,
      required: ["foraeldermyndighedPersonId", "foraeldermyndighedPersonnummer"],
    },
    Barn: {
      title: "Barn",
      type: ["object"],
      properties: {
        barnPersonId: {
          title: "barnPersonId",
          type: ["string"],
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        barnPersonnummer: {
          title: "foraeldermyndighedPersonnummer",
          type: ["string"],
          description: "TRANSIENT",
        },
        Navn: {
          $ref: "#/definitions/Navn",
          description: "EAID_dstE45817_FD1E_4a55_A20E_0A3EEBC580F0",
          comment: "Barnets aktuelle Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          description: "EAID_dst56392A_9FBF_4da9_8527_FBE1B63C7EDA",
          comment: "Barnets aktuelle Adresseoplysninger",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          description: "EAID_dst0CFADD_06AD_4f98_B616_33D3716849E1",
          comment: "Barnets aktuelle UdrejseIndrejse",
        },
        Kontaktadresse: {
          title: "Kontaktadresse",
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dst19482F_9A6C_41e7_9DEE_D7B297BAA34E",
          comment: "Aktuel kontaktadresse på barnet",
        },
        Forsvinding: {
          title: "Aktuel Forsvinding",
          $ref: "#/definitions/Forsvinding",
          description: "EAID_dst9D8AA8_1C30_435a_B114_4A45C92058E6",
          comment: "Aktuel forsvinding på barnet",
        },
        Beskyttelser: {
          title: "Beskyttelser",
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
                description: "EAID_dst8F2337_8084_47ad_87AD_6661D7ACDDB5",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["barnPersonId", "barnPersonnummer"],
    },
    BarnReference: {
      title: "Barn",
      type: ["object"],
      properties: {
        barnPersonId: {
          title: "foraeldermyndighedPersonId",
          type: ["string"],
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        barnPersonnummer: {
          title: "foraeldermyndighedPersonnummer",
          type: ["string"],
          description: "TRANSIENT",
        },
      },
      additionalProperties: false,
      required: ["barnPersonId", "barnPersonnummer"],
    },
    Barnoplysning: {
      title: "Barnoplysning",
      type: ["object"],
      properties: {
        Barn: {
          $ref: "#/definitions/Barn",
          description: "EAID_src7EE6CC_7788_4125_9C02_EE32AAEA265D",
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C10A9A75_5FC0_4b24_95E7_2652DF46441E",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_28DDF5A4_198C_4304_97D6_F362D0183B4D",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "Barn"],
    },
    BarnoplysningMedReference: {
      title: "Barnoplysning",
      type: ["object"],
      properties: {
        Barn: {
          $ref: "#/definitions/BarnReference",
          description: "EAID_src7EE6CC_7788_4125_9C02_EE32AAEA265D",
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C10A9A75_5FC0_4b24_95E7_2652DF46441E",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_28DDF5A4_198C_4304_97D6_F362D0183B4D",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "Barn"],
    },
    Foraeldermyndighedsoplysning: {
      title: "Foraeldermyndighedsoplysning",
      type: ["object"],
      properties: {
        Foraeldermyndig: {
          $ref: "#/definitions/Foraeldermyndig",
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        ForaeldermyndighedsindehaverRolle: {
          title: "ForaeldermyndighedsindehaverRolle",
          type: "string",
          description: "EAID_dst3E15EC_F88C_47c3_A8F3_B01D5A36B5C3",
          enum: ["far_medmor", "mor", "anden"],
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_FCEFA529_D5EE_4e00_981C_A966F5B5B3F2",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_ABBCE703_0A9C_4dcb_BB31_121C0E97CD87",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B66D0AF5_E4FA_4c42_80C1_C81557E53D86",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "ForaeldermyndighedsindehaverRolle"],
    },
    ForaeldermyndighedsoplysningMedReference: {
      title: "Foraeldermyndighedsoplysning",
      type: ["object"],
      properties: {
        Foraeldermyndig: {
          $ref: "#/definitions/ForaeldermyndigReference",
          description: "EAID_dst27941A_F592_4277_8447_2C6FE06C1B3B",
        },
        ForaeldermyndighedsindehaverRolle: {
          title: "ForaeldermyndighedsindehaverRolle",
          type: "string",
          description: "EAID_dst3E15EC_F88C_47c3_A8F3_B01D5A36B5C3",
          enum: ["far_medmor", "mor", "anden"],
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_FCEFA529_D5EE_4e00_981C_A966F5B5B3F2",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_ABBCE703_0A9C_4dcb_BB31_121C0E97CD87",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B66D0AF5_E4FA_4c42_80C1_C81557E53D86",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "virkningFraUsikkerhedsmarkering", "ForaeldermyndighedsindehaverRolle"],
    },
    Beskyttelse: {
      title: "Beskyttelse",
      type: ["object"],
      properties: {
        beskyttelsestype: {
          title: "beskyttelsestype",
          description: "EAID_dst0DF442_9282_4181_B43D_23B02F422804",
          type: "string",
          enum: ["lokal_vejviser", "markedsfoering", "navne_og_adresse", "kreditadvarsel"],
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_8CD2644E_B292_49fd_BCAE_C7B94BE550E9",
          format: "date-time",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_4F7C792A_DD2C_4bd1_BCC3_A3B730945670",
          format: "date-time",
        },
      },
      required: ["beskyttelsestype"],
      additionalProperties: false,
    },
    BeskyttelseUdenVirkningTil: {
      title: "Beskyttelse",
      type: ["object"],
      properties: {
        beskyttelsestype: {
          title: "beskyttelsestype",
          description: "EAID_dst0DF442_9282_4181_B43D_23B02F422804",
          type: "string",
          enum: ["lokal_vejviser", "markedsfoering", "navne_og_adresse"],
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_8CD2644E_B292_49fd_BCAE_C7B94BE550E9",
          format: "date-time",
        },
      },
      required: ["beskyttelsestype"],
    },
    Civilstandstype: {
      type: "string",
      title: "Civilstandstype",
      description: "valide Civilstandstyper",
      enum: ["doed", "enke_enkemand", "fraskilt", "gift", "laengstlevende_partner", "ophoert_partnerskab", "registreret_partnerskab", "ugift"],
    },
    Personnummer: {
      title: "Personnummer",
      type: "object",
      properties: {
        personnummer: {
          title: "personnummer",
          description: "EAID_674CBE6D_060E_46fe_BA9E_0E84874074F0",
          type: "string",
          format: "cpr",
        },
        status: {
          title: "status",
          description: "EAID_dst2034E8_04BE_4751_8DB1_C82BA391C3EF",
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_5AC6B7C9_3F2D_47c4_B3A4_036421F88197",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_1A2720AF_6818_4887_894B_055B95CC9FAB",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_40834881_0B92_4472_B435_E63AB0A6C38C",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_944FC593_5829_4f44_844F_675CA1AB90BA",
        },
      },
      additionalProperties: false,
      required: ["personnummer"],
    },
    CprAdresse: {
      title: "CprAdresse",
      type: ["object"],
      properties: {
        bygningsnummer: {
          title: "bygningsnummer",
          description: "EAID_ACD32207_32F0_4915_AAA8_9E2788B44F2F",
          type: ["string"],
        },
        bynavn: {
          title: "bynavn",
          description: "EAID_B5548113_C452_4341_8E8F_CF25F0D4C303",
          type: ["string"],
        },
        cprKommunekode: {
          title: "cprKommunekode",
          description: "EAID_CFBC5E5D_1439_41ba_B8AB_356A1859A89F",
          type: "string",
        },
        cprKommunenavn: {
          title: "cprKommunenavn",
          description: "EAID_726EF7E6_C1A9_451b_B96E_F8089B1F5737",
          type: "string",
        },
        cprVejkode: {
          title: "cprVejkode",
          description: "EAID_D813A2D9_DEE3_4173_8CD1_8870F48BDE80",
          type: "string",
        },
        etage: {
          title: "etage",
          description: "EAID_F7EC8E87_F0CC_497c_8CBA_540BF38A0841",
          type: ["string"],
        },
        husnummer: {
          title: "husnummer",
          description: "EAID_83469B46_64B3_49f1_8A47_357349B12725",
          type: ["string"],
        },
        postdistrikt: {
          title: "postdistrikt",
          description: "EAID_220BE81E_5B14_406c_B503_BD96ABEB559A",
          type: ["string"],
        },
        postnummer: {
          title: "postnummer",
          description: "EAID_2E49BFE4_0E7D_47e1_934F_4A2BEF38D14E",
          type: ["string"],
        },
        sidedoer: {
          title: "sidedoer",
          description: "EAID_542068CC_8B0B_41de_845D_63E39479BA22",
          type: ["string"],
        },
        vejadresseringsnavn: {
          title: "vejadresseringsnavn",
          description: "EAID_F35B588E_8604_45be_88EE_D88095DA8AE1",
          type: ["string"],
        },
        darAdresseId: {
          title: "darAdresseId",
          description: "EAID_0B2FDA44_B0BA_46c7_B1E5_12720402B077",
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["vejadresseringsnavn", "postdistrikt", "postnummer", "cprVejkode", "cprKommunekode"],
    },
    Adresseoplysninger: {
      title: "Adresseoplysninger",
      type: ["object"],
      properties: {
        conavn: {
          title: "conavn",
          description: "EAID_741EF37B_4051_4519_9679_BBE002387552",
          type: ["string"],
        },
        fraflytningsdatoKommune: {
          title: "fraflytningsdatoKommune",
          description: "EAID_6A14236A_5AC1_4bdd_97F7_C6F4E5B60F3B",
          type: ["string"],
          format: "date-time",
        },
        fraflytningsdatoKommuneUsikkerhedsmarkering: {
          title: "fraflytningsdatoKommuneUsikkerhedsmarkering",
          description: "EAID_2A916826_236A_420b_BD17_0680703AFE03",
          type: ["boolean"],
        },
        fraflytningsKommunekode: {
          title: "fraflytningsKommunekode",
          description: "EAID_C556FE2D_2899_4567_A0CD_4311A5D15D2A",
          type: ["string"],
        },
        fraflytningsKommunenavn: {
          title: "fraflytningsKommunenavn",
          description: "EAID_0CC1A8E8_6623_4242_AA39_108CFE7D9C64",
          type: ["string"],
        },
        tilflytningsdatoKommune: {
          title: "tilflytningsdatoKommune",
          description: "EAID_5A9E9CD8_54CB_4e03_A383_16C7AA39C7E4",
          type: ["string"],
          format: "date-time",
        },
        tilflytningsdatoKommuneUsikkerhedsmarkering: {
          title: "tilflytningsdatoKommuneUsikkerhedsmarkering",
          description: "EAID_2BE18F8B_AC08_45fa_BD81_39665A4EF536",
          type: ["boolean"],
        },
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
          description: "EAID_dst03EEA2_5F4F_43c3_B182_E70F5E86A4CB",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst0A8EF9_B8DF_4a4c_A9FA_F6715F48F3E8",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_DD92B117_FAA0_4e53_9E7D_CF90C86E6F00",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7538171E_D04C_4b0a_90F4_D83903FF475C",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_21521AB3_9D7F_4559_BE5B_415AE41C0F96",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_DCC1BF46_12EA_4ab4_9EB5_41A14DD68DA8",
        },
        SupplerendeAdresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dstA73926_DD32_4614_A90D_E5278B0A00F4",
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "SupplerendeAdresse"],
    },
    AdresseoplysningerUdenSupplerendeAdresse: {
      title: "Adresseoplysninger",
      type: ["object"],
      properties: {
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
          description: "EAID_dst03EEA2_5F4F_43c3_B182_E70F5E86A4CB",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst0A8EF9_B8DF_4a4c_A9FA_F6715F48F3E8",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_DD92B117_FAA0_4e53_9E7D_CF90C86E6F00",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7538171E_D04C_4b0a_90F4_D83903FF475C",
        },
      },
      additionalProperties: false,
    },
    SimpelAdresseoplysninger: {
      title: "SimpelAdresseoplysninger",
      type: ["object"],
      properties: {
        adresseringsnavn: {
          title: "conavn",
          description: "EAID_741EF37B_4051_4519_9679_BBE002387552",
          type: ["string"],
        },
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
          description: "EAID_dst03EEA2_5F4F_43c3_B182_E70F5E86A4CB",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst0A8EF9_B8DF_4a4c_A9FA_F6715F48F3E8",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_DD92B117_FAA0_4e53_9E7D_CF90C86E6F00",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7538171E_D04C_4b0a_90F4_D83903FF475C",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_21521AB3_9D7F_4559_BE5B_415AE41C0F96",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_DCC1BF46_12EA_4ab4_9EB5_41A14DD68DA8",
        },
        SupplerendeAdresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dstA73926_DD32_4614_A90D_E5278B0A00F4",
        },
      },
      additionalProperties: false,
    },
    Navn: {
      title: "Navn",
      type: ["object"],
      properties: {
        adresseringsnavn: {
          title: "adresseringsnavn",
          description: "EAID_2B7D329F_7E3B_4bce_85BC_2B084619649D",
          type: ["string"],
          faker: "person.firstName",
        },
        efternavn: {
          title: "efternavn",
          description: "EAID_D3E09BDA_7174_4555_92F0_A7093671DCCF",
          type: ["string"],
          faker: "person.lastName",
        },
        fornavne: {
          title: "fornavne",
          description: "EAID_C83C2BED_DA60_4017_B446_044A502AFE01",
          type: ["string"],
          faker: "person.firstName",
        },
        mellemnavn: {
          title: "mellemnavn",
          description: "EAID_6503AA6C_33D3_4baa_AD1A_5D7FED741A2B",
          type: ["string"],
          faker: "person.middleName",
        },
        efternavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst1C8603_CA9A_401b_9EB2_024C6D23716E",
        },
        fornavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst5627DC_FCE7_4113_B8B4_DF03C77487CD",
        },
        mellemnavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst1D642B_2424_442c_8016_3BAAE69B6246",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst5E2C1A_CCA5_45da_A5B8_BD184C890AE3",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_CFD36FDB_A3C2_456d_B174_562853726A0D",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_BDD9A534_FCF1_4a44_8D77_C8D8F013B7D4",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_3513A669_E062_4e51_9443_1676F42AEC55",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_A966857F_7F67_4263_845C_0A772B7413E8",
        },
      },
      additionalProperties: false,
      required: [
        "adresseringsnavn",
        "efternavn",
        "fornavne",
        "mellemnavn",
        "efternavnsmarkering",
        "fornavnsmarkering",
        "mellemnavnsmarkering",
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
      ],
    },
    NavnUdenVirkningsperiode: {
      title: "Navn",
      type: ["object"],
      properties: {
        adresseringsnavn: {
          title: "adresseringsnavn",
          description: "EAID_2B7D329F_7E3B_4bce_85BC_2B084619649D",
          type: ["string"],
        },
        efternavn: {
          title: "efternavn",
          description: "EAID_D3E09BDA_7174_4555_92F0_A7093671DCCF",
          type: ["string"],
        },
        fornavne: {
          title: "fornavne",
          description: "EAID_C83C2BED_DA60_4017_B446_044A502AFE01",
          type: ["string"],
        },
        mellemnavn: {
          title: "mellemnavn",
          description: "EAID_6503AA6C_33D3_4baa_AD1A_5D7FED741A2B",
          type: ["string"],
        },
        efternavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst1C8603_CA9A_401b_9EB2_024C6D23716E",
        },
        fornavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst5627DC_FCE7_4113_B8B4_DF03C77487CD",
        },
        mellemnavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dst1D642B_2424_442c_8016_3BAAE69B6246",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst5E2C1A_CCA5_45da_A5B8_BD184C890AE3",
        },
      },
      additionalProperties: false,
      required: ["status"],
    },
    AegtefaelleUdenCpr: {
      type: ["object"],
      title: "AegtefaelleUdenCpr",
      properties: {
        aegtefaelleNavn: {
          title: "aegtefaelleNavn",
          description: "EAID_C1FA9AB2_094F_434f_82F0_1CB3B4386955",
          type: ["string"],
        },
        aegtefaelleNavnemarkering: {
          $ref: "#/definitions/Navnemarkering",
          description: "EAID_dstC1F489_D20F_46e8_A7F5_A625AF29BA12",
        },
        aegtefaelleFoedselsdato: {
          $ref: "#/definitions/foedselsdato",
          description: "EAID_D1610644_C3F3_4ce2_8508_8F1DFC4F9EA4",
        },
        aegtefaelleFoedselsdatoUsikkerhedsmarkering: {
          type: ["boolean"],
          description: "EAID_81C99C34_E0FB_4fb5_A3E9_ED6732F74194",
        },
      },
      additionalProperties: false,
      anyOf: [{ required: ["aegtefaelleNavn"] }, { required: ["aegtefaelleFoedselsdato"] }],
    },
    SimpelCivilstand: {
      type: ["object"],
      title: "Civilstand",
      properties: {
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst10364D_C551_446e_96E0_0333863B6C2C",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_C0D4D4D2_B8F0_4a08_8D3C_030619E95A3F",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_29D7D407_4154_4525_A05D_68C813E15345",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B51D065C_AAEC_4cd4_A09E_3E4D1D417B5D",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7C888BC3_473F_425c_9339_C778042E9C94",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
          description: "EAID_dst013E03_2A8F_4483_A3C4_BDB2EA8D78F9",
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "Civilstandstype"],
    },
    CivilstandMedReference: {
      type: ["object"],
      title: "CivilstandMedReference",
      properties: {
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst10364D_C551_446e_96E0_0333863B6C2C",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_C0D4D4D2_B8F0_4a08_8D3C_030619E95A3F",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_29D7D407_4154_4525_A05D_68C813E15345",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B51D065C_AAEC_4cd4_A09E_3E4D1D417B5D",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7C888BC3_473F_425c_9339_C778042E9C94",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
          description: "EAID_dst013E03_2A8F_4483_A3C4_BDB2EA8D78F9",
        },
        Aegtefaelle: {
          $ref: "#/definitions/AegtefaelleReference",
          description: "EAID_src8EF56A_040C_43b1_9F57_AE3CB9C80ACC",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
          description: "EAID_dst9A5A74_6BAD_4003_9024_446F6C984190",
        },
        Separationer: {
          title: "Separationer",
          type: "array",
          items: {
            type: "object",
            properties: {
              Separation: {
                $ref: "#/definitions/Separation",
                description: "EAID_dst4F9474_41AB_4f50_B2DE_F79926FF6DAF",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "Civilstandstype"],
    },
    Civilstand: {
      type: ["object"],
      title: "Civilstand",
      properties: {
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst10364D_C551_446e_96E0_0333863B6C2C",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_C0D4D4D2_B8F0_4a08_8D3C_030619E95A3F",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_29D7D407_4154_4525_A05D_68C813E15345",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B51D065C_AAEC_4cd4_A09E_3E4D1D417B5D",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7C888BC3_473F_425c_9339_C778042E9C94",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
          description: "EAID_dst013E03_2A8F_4483_A3C4_BDB2EA8D78F9",
        },
        Aegtefaelle: {
          $ref: "#/definitions/Aegtefaelle",
          description: "EAID_src8EF56A_040C_43b1_9F57_AE3CB9C80ACC",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
          description: "EAID_dst9A5A74_6BAD_4003_9024_446F6C984190",
        },
        Separationer: {
          title: "Separationer",
          type: "array",
          items: {
            type: "object",
            properties: {
              Separation: {
                $ref: "#/definitions/Separation",
                description: "EAID_dst4F9474_41AB_4f50_B2DE_F79926FF6DAF",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "Civilstandstype"],
    },
    CivilstandUdenSeparation: {
      type: ["object"],
      title: "Civilstand",
      properties: {
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst10364D_C551_446e_96E0_0333863B6C2C",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_C0D4D4D2_B8F0_4a08_8D3C_030619E95A3F",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_29D7D407_4154_4525_A05D_68C813E15345",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_B51D065C_AAEC_4cd4_A09E_3E4D1D417B5D",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_7C888BC3_473F_425c_9339_C778042E9C94",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
          description: "EAID_dst013E03_2A8F_4483_A3C4_BDB2EA8D78F9",
        },
        Aegtefaelle: {
          $ref: "#/definitions/Aegtefaelle",
          description: "EAID_src8EF56A_040C_43b1_9F57_AE3CB9C80ACC",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
          description: "EAID_dst9A5A74_6BAD_4003_9024_446F6C984190",
        },
      },
      additionalProperties: false,
    },
    UdrejseIndrejse: {
      title: "UdrejseIndrejse",
      type: ["object"],
      properties: {
        cprLandekodeIndrejse: {
          title: "cprLandekodeIndrejse",
          description: "EAID_979F7108_CBD4_45f5_AC1C_90412128278D",
          type: ["string"],
        },
        cprLandIndrejse: {
          title: "cprLandIndrejse",
          description: "EAID_8DD5EDDC_5A66_4790_8142_B1A08ECA2988",
          type: ["string"],
        },
        cprLandekodeUdrejse: {
          title: "cprLandekodeUdrejse",
          description: "EAID_DA761AC7_7D23_42be_88DE_D8766666D055",
          type: ["string"],
        },
        cprLandUdrejse: {
          title: "cprLandUdrejse",
          description: "EAID_13FA5170_102B_42cc_8AD5_ED692015DBA3",
          type: ["string"],
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst1A0F9E_5322_4a67_A7C7_2145B666D25B",
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C71E1A16_FBAE_4c23_88D9_DA9F1BE32FD7",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_336F1C95_EC31_40af_BFE1_1655406283F1",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_C7567091_7ED3_49e7_AF98_EEBFAE512545",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_701D4F6B_EEB3_431e_8706_BD588FA27A24",
        },
        Udenlandsadresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dst8F09B5_C2C6_46e8_8FDE_E1F6B672E67D",
        },
      },
      additionalProperties: false,
    },
    UdrejseIndrejseUdenVirkningTil: {
      title: "UdrejseIndrejse",
      type: ["object"],
      properties: {
        cprLandekodeIndrejse: {
          title: "cprLandekodeIndrejse",
          description: "EAID_979F7108_CBD4_45f5_AC1C_90412128278D",
          type: ["string"],
        },
        cprLandIndrejse: {
          title: "cprLandIndrejse",
          description: "EAID_8DD5EDDC_5A66_4790_8142_B1A08ECA2988",
          type: ["string"],
        },
        cprLandekodeUdrejse: {
          title: "cprLandekodeUdrejse",
          description: "EAID_DA761AC7_7D23_42be_88DE_D8766666D055",
          type: ["string"],
        },
        cprLandUdrejse: {
          title: "cprLandUdrejse",
          description: "EAID_13FA5170_102B_42cc_8AD5_ED692015DBA3",
          type: ["string"],
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst1A0F9E_5322_4a67_A7C7_2145B666D25B",
        },
        virkningFra: {
          title: "virkningFra",
          type: ["string"],
          description: "EAID_C71E1A16_FBAE_4c23_88D9_DA9F1BE32FD7",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_336F1C95_EC31_40af_BFE1_1655406283F1",
        },
        Udenlandsadresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dst8F09B5_C2C6_46e8_8FDE_E1F6B672E67D",
        },
      },
      additionalProperties: false,
      required: ["status"],
      anyOf: [{ required: ["cprLandekodeIndrejse"] }, { required: ["cprLandekodeUdrejse"] }],
    },
    Vaergemaal: {
      title: "Vaergemaal",
      type: ["object"],
      properties: {
        vaergenavn: {
          type: ["string"],
          description: "EAID_845FA40A_7E1B_4b72_B264_515054369DA5",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dst5B28B7_11A5_48de_BA7C_05C4BD8D3805",
        },
      },
      additionalProperties: false,
    },
    Aegtefaelle: {
      title: "Aegtefaelle",
      type: ["object"],
      properties: {
        aegtefaellePersonId: {
          title: "aegtefaellePersonId",
          type: "string",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        aegtefaellePersonnummer: {
          title: "aegtefaellePersonnummer",
          type: "string",
          description: "TRANSIENT",
        },
        Navn: {
          $ref: "#/definitions/Navn",
          description: "EAID_dstE45817_FD1E_4a55_A20E_0A3EEBC580F0",
          comment: "REF UUID er ægtefællen som persons reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          description: "EAID_dst56392A_9FBF_4da9_8527_FBE1B63C7EDA",
          comment: "Aktuelle Adresseoplysninger for ægtefællen såfremt den er til stede",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          description: "EAID_dst0CFADD_06AD_4f98_B616_33D3716849E1",
          comment: "Aktuel UdrejseIndrejse for ægtefællen såfremt den er til stede",
        },
        Kontaktadresse: {
          title: "Kontaktadresse",
          $ref: "#/definitions/SimpelAdresseoplysning",
          description: "EAID_dst19482F_9A6C_41e7_9DEE_D7B297BAA34E",
          comment: "Aktuel kontaktadresse på ægtefællen såfremt den er til stede",
        },
        Forsvinding: {
          title: "Aktuel Forsvinding",
          $ref: "#/definitions/Forsvinding",
          description: "EAID_dst9D8AA8_1C30_435a_B114_4A45C92058E6",
          comment: "Aktuel forsvinding på ægtefællen såfremt den er til stede",
        },
        Beskyttelser: {
          title: "Beskyttelser",
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
                description: "EAID_dst8F2337_8084_47ad_87AD_6661D7ACDDB5",
              },
            },
          },
        },
      },
      additionalProperties: false,
      required: ["aegtefaellePersonId", "aegtefaellePersonnummer", "Navn"],
    },
    AegtefaelleReference: {
      title: "AegtefaelleReference",
      type: ["object"],
      properties: {
        aegtefaellePersonId: {
          title: "aegtefaellePersonId",
          type: "string",
          description: "EAID_dst2D11AD_A0DE_45e9_A943_15F6AF70AD75",
        },
        aegtefaellePersonnummer: {
          title: "aegtefaellePersonnummer",
          type: "string",
          description: "TRANSIENT",
        },
      },
      additionalProperties: false,
      required: ["aegtefaellePersonId", "aegtefaellePersonnummer"],
    },
    SimpelVaergemaal: {
      title: "SimpelVaergemaal",
      type: ["object"],
      properties: {
        vaergenavn: {
          type: ["string"],
          description: "EAID_845FA40A_7E1B_4b72_B264_515054369DA5",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dst5B28B7_11A5_48de_BA7C_05C4BD8D3805",
        },
      },
      additionalProperties: false,
    },
    Separation: {
      title: "Separation",
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst8988D9_C089_46ff_B4DC_BD4512642200",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_1FA30E82_30B8_472f_8750_9CE9D437A07B",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_07586AE8_9BA0_4135_B68C_EC47729262B2",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_F1E1CB39_47F0_4571_BEC7_8F657C7E5556",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_508252A8_2170_46cc_A5BB_7DBC63805B75",
        },
      },
      additionalProperties: false,
    },
    SimpelAdresseoplysning: {
      title: "SimpelAdresseoplysning",
      type: ["object"],
      properties: {
        startmyndighedskode: {
          type: ["string"],
          description: "EAID_847F7CE0_8DB8_40a7_8B7F_D54109696CA9",
        },
        startmyndighedsnavn: {
          type: ["string"],
          description: "EAID_164C240B_1832_4c44_8952_CC55A67DF7E7",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_F2B3195C_8E48_4336_836B_EA709F2029E1",
          format: "date-time",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_26591C78_F9C5_46b2_9912_3BEAE3FC0F3C",
          format: "date-time",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dstFF1A59_7FD2_49ba_8F8A_EEC8809DE7A9",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "SimpelAdresse"],
    },
    SimpelAdresseoplysningUdenVirkningTil: {
      title: "SimpelAdresseoplysning",
      type: ["object"],
      properties: {
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_F2B3195C_8E48_4336_836B_EA709F2029E1",
          format: "date-time",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
          description: "EAID_dstFF1A59_7FD2_49ba_8F8A_EEC8809DE7A9",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "SimpelAdresse"],
    },
    SimpelAdresse: {
      title: "SimpelAdresse",
      type: ["object"],
      properties: {
        adresselinie1: {
          title: "adresselinie1",
          type: ["string"],
          description: "EAID_65467DBA_54ED_4da7_8F09_3646D0052892",
        },
        adresselinie2: {
          title: "adresselinie2",
          type: ["string"],
          description: "EAID_9F3B7E21_B625_4f58_890D_D3EAFDB84112",
        },
        adresselinie3: {
          title: "adresselinie3",
          type: ["string"],
          description: "EAID_730F4C3D_8B73_4bdc_9B62_BB758FF03018",
        },
        adresselinie4: {
          title: "adresselinie4",
          type: ["string"],
          description: "EAID_3B60F849_84EE_4774_A3A3_8AD836836C84",
        },
        adresselinie5: {
          title: "adresselinie5",
          type: ["string"],
          description: "EAID_A791BBA5_8145_4f31_A1E0_9E6813148B82",
        },
      },
      additionalProperties: false,
      required: ["adresselinie1"],
    },
    Statsborgerskab: {
      title: "Statsborgerskab",
      type: ["object"],
      properties: {
        cprlandekode: {
          title: "cprlandekode",
          type: "string",
          description: "EAID_9BD3B1E9_4031_4db3_AA93_9199A71EF82B",
        },
        cprlandenavn: {
          title: "cprlandenavn",
          type: "string",
          description: "EAID_4556FC37_C712_452a_8589_775A5B2F6EB9",
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst5A3A00_7AFC_4f0f_9D77_BABC35753623",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_C3F806F8_BD48_4434_9A4B_C1F6FDCAF31F",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_5694F919_40E5_4846_AD8F_419058DCE12B",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_519EF853_D7FD_472d_BBF4_5C361B5FFEE0",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_EE057711_5BCD_44f9_86DF_518F1B2131F0",
        },
      },
      additionalProperties: false,
      required: ["cprlandekode", "cprlandenavn", "status", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    KommunaleForhold: {
      title: "KommunaleForhold",
      type: ["object"],
      properties: {
        bemaerkning: {
          title: "bemaerkning",
          type: ["string"],
          description: "EAID_53BD4D49_152D_4e73_95FF_1CB01519AE55",
        },
        kommunaleforholdskode: {
          title: "kommunaleforholdskode",
          type: "string",
          description: "EAID_EB376BCE_E3FF_4946_9A6D_A650E48B39E8",
        },
        KommunaleForholdsType: {
          title: "kommunaleforholdstype",
          type: "string",
          description: "EAID_dst2349F8_DE64_4b55_B0B1_0301EB1F355F",
          enum: [
            "adskilt",
            "betalingskommune",
            "kommunale_forhold_5",
            "kommunale_forhold_6",
            "kommunale_forhold_7",
            "kommunale_forhold_8",
            "kommunale_forhold_9",
            "pensionsforhold",
            "plejebarn",
            "ukendt",
          ],
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_5524CA7D_A622_45c0_80A6_0DE73599E5F1",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_6C73F10E_D311_4bb9_8345_14BB817B750F",
        },
      },
      additionalProperties: false,
    },
    Valgoplysning: {
      title: "Valgoplysning",
      type: ["object"],
      properties: {
        valgretsdato: {
          title: "valgretsdato",
          description: "EAID_D3A4F769_BCB7_40bd_8A0E_D4EAE319E003",
          type: ["string"],
          format: "date-time",
        },
        ValgoplysningsType: {
          title: "ValgoplysningsType",
          description: "EAID_dst184AE1_0D53_4b61_AE44_5677FCDEA5F7",
          type: "string",
          enum: ["almindelig_valgret", "diplomater", "eu_valg_ja", "eu_valg_koebenhavn", "eu_valg_nej", "gamle_diplomater"],
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_DE0F26D1_AF49_461a_AE1E_8BBF13404FAE",
          format: "date-time",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_BA6B8A81_4A91_4e40_B321_9F1899634D55",
          format: "date-time",
        },
      },
      additionalProperties: false,
    },
    Folkekirke: {
      title: "Folkekirke",
      type: ["object"],
      properties: {
        Tilhoersforhold: {
          title: "Tilhoersforhold",
          type: "string",
          description: "EAID_dst75AD72_6186_4418_89E1_DF9CFD0D54E7",
          enum: [
            "uden_for_folkekirken",
            "medlem_af_valgmenighed_tillige_medlem_af_folkekirken",
            "medlem_af_folkekirken_men_fritaget_for_kirkeskat",
            "medlem_af_folkekirken",
            "afventer",
          ],
        },
        status: {
          $ref: "#/definitions/Status",
          description: "EAID_dst4B9493_A704_4e54_BC07_0FEC9637D066",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_A7644231_5B71_45b1_B96A_9E130D855CBF",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningFraUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_86C5E44C_D5B7_4190_B15A_0BB9AD0BBF30",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_24561393_60A0_4129_B4E4_018E2F3A588D",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_3E0D2947_4CAC_4345_853E_291292095743",
        },
      },
      additionalProperties: false,
    },
    Flyttepaabud: {
      title: "Flyttepaabud",
      type: ["object"],
      properties: {
        bemaerkning: {
          title: "bemaerkning",
          type: ["string"],
          description: "EAID_3584F178_736C_4b05_AF8A_5D5D9ED3C1F8",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_93E6C4D8_F235_4dbc_B6F7_9C675ED021FA",
          format: "date-time",
        },
      },
      additionalProperties: false,
    },
    Notat: {
      title: "Notat",
      type: ["object"],
      properties: {
        notatlinie: {
          title: "notatlinie",
          description: "EAID_4D9AB31F_BEB8_46dd_B719_0DC39E9E14D2",
          type: ["string"],
        },
        notatnummer: {
          title: "notatnummer",
          description: "EAID_9249D65C_AE5A_4649_BCFF_540BE8CF296D",
          type: ["integer"],
        },
        virkningFra: {
          title: "virkningFra",
          description: "EAID_84409219_53A9_4a7b_8E49_6B8484BC795D",
          type: ["string"],
          format: "date-time",
        },
        virkningTil: {
          title: "virkningTil",
          description: "EAID_5EC7B7C8_ABB5_43f0_B7F5_407CE343956B",
          type: ["string"],
          format: "date-time",
        },
      },
      additionalProperties: false,
    },
    Forsvinding: {
      title: "Forsvinding",
      type: ["object"],
      properties: {
        status: {
          description: "EAID_dstF3A94A_2E62_43d8_B0D2_18FFB9A9D813",
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          title: "virkningFra",
          type: "string",
          description: "EAID_E0EA4E7E_48AF_4767_98FB_C7E4C0554BC0",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          title: "virkningTil",
          type: "boolean",
          description: "EAID_793FAD6C_5310_48d4_803F_1FE25B0D2D96",
        },
        virkningTil: {
          title: "virkningTil",
          type: ["string"],
          description: "EAID_D330A8DB_81E6_49a0_B6A6_3374C510B49A",
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          title: "virkningTilUsikkerhedsmarkering",
          type: "boolean",
          description: "EAID_8D953F55_7BBA_419b_98C1_EEE517816294",
        },
      },
      additionalProperties: false,
    },
    Navnemarkering: {
      type: ["string"],
      title: "Navnemarkering",
      description: "Anvendes til at angive dokumentationsniveauet for navnet",
      enum: [null, "forkortet", "indeholder_tegn_der_ikke_kan_indrapporteres_til_cpr", "utilstraekkeligt_dokumenteret"],
    },
  },
  title: "CPR Defininitioner",
};
