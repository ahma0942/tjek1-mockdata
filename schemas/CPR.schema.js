module.exports = {
  type: "object",
  properties: {
    Personer: {
      type: "array",
      minItems: 10,
      maxItems: 20,
      items: {
        type: "object",
        properties: {
          Person: {
            type: "object",
            properties: {
              id: {
                type: "string",
                faker: "string.uuid",
              },
              cprfoedselsregistreringsstedskode: {
                type: "string",
              },
              cprfoedselsregistreringsstedsnavn: {
                type: "string",
              },
              supplerendeFoedselsregistreringssted: {
                type: ["string"],
              },
              foedselsdato: {
                $ref: "#/definitions/foedselsdato",
              },
              foedselsdatoUsikkerhedsmarkering: {
                type: "boolean",
              },
              koen: {
                type: "string",
                enum: ["kvinde", "mand"],
              },
              stilling: {
                type: ["string"],
              },
              statusdato: {
                type: "string",
                format: "date-time",
              },
              statusdatoUsikkerhedsmarkering: {
                type: "boolean",
              },
              status: {
                $ref: "#/definitions/PersonStatus",
              },
              Beskyttelser: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Beskyttelse: {
                      $ref: "#/definitions/Beskyttelse",
                    },
                  },
                  required: ["Beskyttelse"],
                },
              },
              Personnumre: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Personnummer: {
                      $ref: "#/definitions/Personnummer",
                    },
                  },
                  required: ["Personnummer"],
                },
              },
              Navne: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Navn: {
                      $ref: "#/definitions/Navn",
                    },
                  },
                  required: ["Navn"],
                },
              },
              UdrejseIndrejser: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    UdrejseIndrejse: {
                      $ref: "#/definitions/UdrejseIndrejse",
                    },
                  },
                  required: ["UdrejseIndrejse"],
                },
              },
              Adresseoplysninger: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    Adresseoplysninger: {
                      $ref: "#/definitions/Adresseoplysninger",
                    },
                  },
                  required: ["Adresseoplysninger"],
                },
              },
            },
            additionalProperties: false,
            required: [
              "id",
              "cprfoedselsregistreringsstedskode",
              "cprfoedselsregistreringsstedsnavn",
              "supplerendeFoedselsregistreringssted",
              "foedselsdato",
              "foedselsdatoUsikkerhedsmarkering",
              "koen",
              "stilling",
              "statusdato",
              "statusdatoUsikkerhedsmarkering",
              "status",
              "Beskyttelser",
              "Personnumre",
              "Navne",
              "UdrejseIndrejser",
              "Adresseoplysninger",
            ],
          },
        },
        required: ["Person"],
      },
    },
  },
  definitions: {
    PersonStatus: {
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
      type: "string",
      enum: ["aktuel", "fortrudt", "historisk", "rettet", "teknisk_aendring"],
    },
    foedselsdato: {
      type: "string",
      format: "date-time",
    },
    Foraelder: {
      type: ["object"],
      properties: {
        Navn: {
          $ref: "#/definitions/Navn",
          comment: "REF UUID er for\u00e6lderen som persons reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          comment: "Adresseoplysninger p\u00e5 for\u00e6lderen s\u00e5fremt de er til stede",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          comment: "UdrejseIndrejse s\u00e5fremt de er til stede",
        },
        Kontaktadresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          comment: "Aktuel kontaktadresse p\u00e5 for\u00e6lderen s\u00e5fremt den er til stede",
        },
        Forsvinding: {
          $ref: "#/definitions/Forsvinding",
          comment: "Aktuel forsvinding p\u00e5 for\u00e6lderen s\u00e5fremt den er til stede",
        },
        foraelderPersonId: {
          type: "string",
        },
        foraelderPersonnummer: {
          type: "string",
        },
        Beskyttelser: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
              },
            },
            required: ["Beskyttelse"],
          },
        },
      },
      additionalProperties: false,
      required: [
        "Navn",
        "Adresseoplysninger",
        "UdrejseIndrejse",
        "Kontaktadresse",
        "Forsvinding",
        "foraelderPersonId",
        "foraelderPersonnummer",
        "Beskyttelser",
      ],
    },
    ForaelderReference: {
      type: ["object"],
      properties: {
        foraelderPersonId: {
          type: "string",
        },
        foraelderPersonnummer: {
          type: "string",
        },
      },
      additionalProperties: false,
      required: ["foraelderPersonId", "foraelderPersonnummer"],
    },
    Foraelderoplysning: {
      type: ["object"],
      properties: {
        Foraelder: {
          $ref: "#/definitions/Foraelder",
        },
        ForaelderUdenCpr: {
          type: ["object"],
          properties: {
            foraelderNavn: {
              type: ["string"],
            },
            foraelderNavnemarkering: {
              $ref: "#/definitions/Navnemarkering",
            },
            foraelderFoedselsdato: {
              type: ["string"],
              format: "date-time",
            },
            foraelderFoedselsdatoUsikkerhedsmarkering: {
              type: ["boolean"],
            },
          },
          required: ["foraelderNavn", "foraelderNavnemarkering", "foraelderFoedselsdato", "foraelderFoedselsdatoUsikkerhedsmarkering"],
        },
        ForaelderRolle: {
          type: "string",
          enum: ["mor", "far_medmor"],
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      oneOf: [
        {
          required: ["Foraelder"],
        },
        {
          required: ["ForaelderUdenCpr"],
        },
      ],
      required: ["Foraelder", "ForaelderUdenCpr", "ForaelderRolle", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    ForaelderoplysningMedReference: {
      type: ["object"],
      properties: {
        Foraelder: {
          $ref: "#/definitions/ForaelderReference",
        },
        ForaelderUdenCpr: {
          type: ["object"],
          properties: {
            foraelderNavn: {
              type: ["string"],
            },
            foraelderNavnemarkering: {
              $ref: "#/definitions/Navnemarkering",
            },
            foraelderFoedselsdato: {
              type: ["string"],
              format: "date-time",
            },
            foraelderFoedselsdatoUsikkerhedsmarkering: {
              type: ["boolean"],
            },
          },
          required: ["foraelderNavn", "foraelderNavnemarkering", "foraelderFoedselsdato", "foraelderFoedselsdatoUsikkerhedsmarkering"],
        },
        ForaelderRolle: {
          type: "string",
          enum: ["mor", "far_medmor"],
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      oneOf: [
        {
          required: ["Foraelder"],
        },
        {
          required: ["ForaelderUdenCpr"],
        },
      ],
      required: ["Foraelder", "ForaelderUdenCpr", "ForaelderRolle", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    Foraeldermyndig: {
      type: ["object"],
      properties: {
        foraeldermyndighedPersonId: {
          type: ["string"],
        },
        foraeldermyndighedPersonnummer: {
          type: ["string"],
        },
        Navn: {
          $ref: "#/definitions/Navn",
          comment: "Den myndiges reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          comment: "Den myndiges reference til Adresseoplysninger",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          comment: "Den myndiges reference til UdrejseIndrejse",
        },
        Kontaktadresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          comment: "Aktuel kontaktadresse p\u00e5 den myndige s\u00e5fremt den er til stede",
        },
        Forsvinding: {
          $ref: "#/definitions/Forsvinding",
          comment: "Aktuel forsvinding p\u00e5 den myndige s\u00e5fremt den er til stede",
        },
        Beskyttelser: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
              },
            },
            required: ["Beskyttelse"],
          },
        },
      },
      additionalProperties: false,
      required: [
        "foraeldermyndighedPersonId",
        "foraeldermyndighedPersonnummer",
        "Navn",
        "Adresseoplysninger",
        "UdrejseIndrejse",
        "Kontaktadresse",
        "Forsvinding",
        "Beskyttelser",
      ],
    },
    ForaeldermyndigReference: {
      type: ["object"],
      properties: {
        foraeldermyndighedPersonId: {
          type: ["string"],
        },
        foraeldermyndighedPersonnummer: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["foraeldermyndighedPersonId", "foraeldermyndighedPersonnummer"],
    },
    Barn: {
      type: ["object"],
      properties: {
        barnPersonId: {
          type: ["string"],
        },
        barnPersonnummer: {
          type: ["string"],
        },
        Navn: {
          $ref: "#/definitions/Navn",
          comment: "Barnets aktuelle Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          comment: "Barnets aktuelle Adresseoplysninger",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          comment: "Barnets aktuelle UdrejseIndrejse",
        },
        Kontaktadresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          comment: "Aktuel kontaktadresse p\u00e5 barnet",
        },
        Forsvinding: {
          $ref: "#/definitions/Forsvinding",
          comment: "Aktuel forsvinding p\u00e5 barnet",
        },
        Beskyttelser: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
              },
            },
            required: ["Beskyttelse"],
          },
        },
      },
      additionalProperties: false,
      required: ["barnPersonId", "barnPersonnummer", "Navn", "Adresseoplysninger", "UdrejseIndrejse", "Kontaktadresse", "Forsvinding", "Beskyttelser"],
    },
    BarnReference: {
      type: ["object"],
      properties: {
        barnPersonId: {
          type: ["string"],
        },
        barnPersonnummer: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["barnPersonId", "barnPersonnummer"],
    },
    Barnoplysning: {
      type: ["object"],
      properties: {
        Barn: {
          $ref: "#/definitions/Barn",
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["Barn", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    BarnoplysningMedReference: {
      type: ["object"],
      properties: {
        Barn: {
          $ref: "#/definitions/BarnReference",
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["Barn", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    Foraeldermyndighedsoplysning: {
      type: ["object"],
      properties: {
        Foraeldermyndig: {
          $ref: "#/definitions/Foraeldermyndig",
        },
        ForaeldermyndighedsindehaverRolle: {
          type: "string",
          enum: ["far_medmor", "mor", "anden"],
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["Foraeldermyndig", "ForaeldermyndighedsindehaverRolle", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil"],
    },
    ForaeldermyndighedsoplysningMedReference: {
      type: ["object"],
      properties: {
        Foraeldermyndig: {
          $ref: "#/definitions/ForaeldermyndigReference",
        },
        ForaeldermyndighedsindehaverRolle: {
          type: "string",
          enum: ["far_medmor", "mor", "anden"],
        },
        virkningFra: {
          type: ["string"],
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["Foraeldermyndig", "ForaeldermyndighedsindehaverRolle", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil"],
    },
    Beskyttelse: {
      type: ["object"],
      properties: {
        beskyttelsestype: {
          type: "string",
          enum: ["lokal_vejviser", "markedsfoering", "navne_og_adresse", "kreditadvarsel"],
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
      },
      additionalProperties: false,
      required: ["beskyttelsestype", "virkningFra", "virkningTil"],
    },
    BeskyttelseUdenVirkningTil: {
      type: ["object"],
      properties: {
        beskyttelsestype: {
          type: "string",
          enum: ["lokal_vejviser", "markedsfoering", "navne_og_adresse"],
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
      },
      required: ["beskyttelsestype", "virkningFra"],
    },
    Civilstandstype: {
      type: "string",
      enum: ["doed", "enke_enkemand", "fraskilt", "gift", "laengstlevende_partner", "ophoert_partnerskab", "registreret_partnerskab", "ugift"],
    },
    Personnummer: {
      type: "object",
      properties: {
        personnummer: {
          type: "string",
          format: "cpr",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["personnummer", "status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering"],
    },
    CprAdresse: {
      type: ["object"],
      properties: {
        bygningsnummer: {
          type: ["string"],
        },
        bynavn: {
          type: ["string"],
        },
        cprKommunekode: {
          type: "string",
        },
        cprKommunenavn: {
          type: "string",
        },
        cprVejkode: {
          type: "string",
        },
        etage: {
          type: ["string"],
        },
        husnummer: {
          type: ["string"],
        },
        postdistrikt: {
          type: ["string"],
        },
        postnummer: {
          type: ["string"],
        },
        sidedoer: {
          type: ["string"],
        },
        vejadresseringsnavn: {
          type: ["string"],
        },
        darAdresseId: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: [
        "bygningsnummer",
        "bynavn",
        "cprKommunekode",
        "cprKommunenavn",
        "cprVejkode",
        "etage",
        "husnummer",
        "postdistrikt",
        "postnummer",
        "sidedoer",
        "vejadresseringsnavn",
        "darAdresseId",
      ],
    },
    Adresseoplysninger: {
      type: ["object"],
      properties: {
        conavn: {
          type: ["string"],
        },
        fraflytningsdatoKommune: {
          type: ["string"],
          format: "date-time",
        },
        fraflytningsdatoKommuneUsikkerhedsmarkering: {
          type: ["boolean"],
        },
        fraflytningsKommunekode: {
          type: ["string"],
        },
        fraflytningsKommunenavn: {
          type: ["string"],
        },
        tilflytningsdatoKommune: {
          type: ["string"],
          format: "date-time",
        },
        tilflytningsdatoKommuneUsikkerhedsmarkering: {
          type: ["boolean"],
        },
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        SupplerendeAdresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
        },
      },
      additionalProperties: false,
      required: [
        "conavn",
        "fraflytningsdatoKommune",
        "fraflytningsdatoKommuneUsikkerhedsmarkering",
        "fraflytningsKommunekode",
        "fraflytningsKommunenavn",
        "tilflytningsdatoKommune",
        "tilflytningsdatoKommuneUsikkerhedsmarkering",
        "CprAdresse",
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "SupplerendeAdresse",
      ],
    },
    AdresseoplysningerUdenSupplerendeAdresse: {
      type: ["object"],
      properties: {
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["CprAdresse", "status", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    SimpelAdresseoplysninger: {
      type: ["object"],
      properties: {
        adresseringsnavn: {
          type: ["string"],
        },
        CprAdresse: {
          $ref: "#/definitions/CprAdresse",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        SupplerendeAdresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
        },
      },
      additionalProperties: false,
      required: [
        "adresseringsnavn",
        "CprAdresse",
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "SupplerendeAdresse",
      ],
    },
    Navn: {
      type: ["object"],
      properties: {
        adresseringsnavn: {
          type: ["string"],
          faker: "person.firstName",
        },
        efternavn: {
          type: ["string"],
          faker: "person.lastName",
        },
        fornavne: {
          type: ["string"],
          faker: "person.firstName",
        },
        mellemnavn: {
          type: ["string"],
          faker: "person.middleName",
        },
        efternavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        fornavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        mellemnavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
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
      type: ["object"],
      properties: {
        adresseringsnavn: {
          type: ["string"],
        },
        efternavn: {
          type: ["string"],
        },
        fornavne: {
          type: ["string"],
        },
        mellemnavn: {
          type: ["string"],
        },
        efternavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        fornavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        mellemnavnsmarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        status: {
          $ref: "#/definitions/Status",
        },
      },
      additionalProperties: false,
      required: ["adresseringsnavn", "efternavn", "fornavne", "mellemnavn", "efternavnsmarkering", "fornavnsmarkering", "mellemnavnsmarkering", "status"],
    },
    AegtefaelleUdenCpr: {
      type: ["object"],
      properties: {
        aegtefaelleNavn: {
          type: ["string"],
        },
        aegtefaelleNavnemarkering: {
          $ref: "#/definitions/Navnemarkering",
        },
        aegtefaelleFoedselsdato: {
          $ref: "#/definitions/foedselsdato",
        },
        aegtefaelleFoedselsdatoUsikkerhedsmarkering: {
          type: ["boolean"],
        },
      },
      additionalProperties: false,
      anyOf: [
        {
          required: ["aegtefaelleNavn"],
        },
        {
          required: ["aegtefaelleFoedselsdato"],
        },
      ],
      required: ["aegtefaelleNavn", "aegtefaelleNavnemarkering", "aegtefaelleFoedselsdato", "aegtefaelleFoedselsdatoUsikkerhedsmarkering"],
    },
    SimpelCivilstand: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering", "Civilstandstype"],
    },
    CivilstandMedReference: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
        },
        Aegtefaelle: {
          $ref: "#/definitions/AegtefaelleReference",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
        },
        Separationer: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Separation: {
                $ref: "#/definitions/Separation",
              },
            },
            required: ["Separation"],
          },
        },
      },
      additionalProperties: false,
      required: [
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "Civilstandstype",
        "Aegtefaelle",
        "AegtefaelleUdenCpr",
        "Separationer",
      ],
    },
    Civilstand: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
        },
        Aegtefaelle: {
          $ref: "#/definitions/Aegtefaelle",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
        },
        Separationer: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Separation: {
                $ref: "#/definitions/Separation",
              },
            },
            required: ["Separation"],
          },
        },
      },
      additionalProperties: false,
      required: [
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "Civilstandstype",
        "Aegtefaelle",
        "AegtefaelleUdenCpr",
        "Separationer",
      ],
    },
    CivilstandUdenSeparation: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        Civilstandstype: {
          $ref: "#/definitions/Civilstandstype",
        },
        Aegtefaelle: {
          $ref: "#/definitions/Aegtefaelle",
        },
        AegtefaelleUdenCpr: {
          $ref: "#/definitions/AegtefaelleUdenCpr",
        },
      },
      additionalProperties: false,
      required: [
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "Civilstandstype",
        "Aegtefaelle",
        "AegtefaelleUdenCpr",
      ],
    },
    UdrejseIndrejse: {
      type: ["object"],
      properties: {
        cprLandekodeIndrejse: {
          type: ["string"],
        },
        cprLandIndrejse: {
          type: ["string"],
        },
        cprLandekodeUdrejse: {
          type: ["string"],
        },
        cprLandUdrejse: {
          type: ["string"],
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: ["string"],
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
        Udenlandsadresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      required: [
        "cprLandekodeIndrejse",
        "cprLandIndrejse",
        "cprLandekodeUdrejse",
        "cprLandUdrejse",
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "virkningTil",
        "virkningTilUsikkerhedsmarkering",
        "Udenlandsadresse",
      ],
    },
    UdrejseIndrejseUdenVirkningTil: {
      type: ["object"],
      properties: {
        cprLandekodeIndrejse: {
          type: ["string"],
        },
        cprLandIndrejse: {
          type: ["string"],
        },
        cprLandekodeUdrejse: {
          type: ["string"],
        },
        cprLandUdrejse: {
          type: ["string"],
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: ["string"],
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        Udenlandsadresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      anyOf: [
        {
          required: ["cprLandekodeIndrejse"],
        },
        {
          required: ["cprLandekodeUdrejse"],
        },
      ],
      required: [
        "cprLandekodeIndrejse",
        "cprLandIndrejse",
        "cprLandekodeUdrejse",
        "cprLandUdrejse",
        "status",
        "virkningFra",
        "virkningFraUsikkerhedsmarkering",
        "Udenlandsadresse",
      ],
    },
    Vaergemaal: {
      type: ["object"],
      properties: {
        vaergenavn: {
          type: ["string"],
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      required: ["vaergenavn", "SimpelAdresse"],
    },
    Aegtefaelle: {
      type: ["object"],
      properties: {
        aegtefaellePersonId: {
          type: "string",
        },
        aegtefaellePersonnummer: {
          type: "string",
        },
        Navn: {
          $ref: "#/definitions/Navn",
          comment: "REF UUID er \u00e6gtef\u00e6llen som persons reference til Navn",
        },
        Adresseoplysninger: {
          $ref: "#/definitions/Adresseoplysninger",
          comment: "Aktuelle Adresseoplysninger for \u00e6gtef\u00e6llen s\u00e5fremt den er til stede",
        },
        UdrejseIndrejse: {
          $ref: "#/definitions/UdrejseIndrejse",
          comment: "Aktuel UdrejseIndrejse for \u00e6gtef\u00e6llen s\u00e5fremt den er til stede",
        },
        Kontaktadresse: {
          $ref: "#/definitions/SimpelAdresseoplysning",
          comment: "Aktuel kontaktadresse p\u00e5 \u00e6gtef\u00e6llen s\u00e5fremt den er til stede",
        },
        Forsvinding: {
          $ref: "#/definitions/Forsvinding",
          comment: "Aktuel forsvinding p\u00e5 \u00e6gtef\u00e6llen s\u00e5fremt den er til stede",
        },
        Beskyttelser: {
          type: "array",
          items: {
            type: "object",
            properties: {
              Beskyttelse: {
                $ref: "#/definitions/Beskyttelse",
              },
            },
            required: ["Beskyttelse"],
          },
        },
      },
      additionalProperties: false,
      required: [
        "aegtefaellePersonId",
        "aegtefaellePersonnummer",
        "Navn",
        "Adresseoplysninger",
        "UdrejseIndrejse",
        "Kontaktadresse",
        "Forsvinding",
        "Beskyttelser",
      ],
    },
    AegtefaelleReference: {
      type: ["object"],
      properties: {
        aegtefaellePersonId: {
          type: "string",
        },
        aegtefaellePersonnummer: {
          type: "string",
        },
      },
      additionalProperties: false,
      required: ["aegtefaellePersonId", "aegtefaellePersonnummer"],
    },
    SimpelVaergemaal: {
      type: ["object"],
      properties: {
        vaergenavn: {
          type: ["string"],
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      required: ["vaergenavn", "SimpelAdresse"],
    },
    Separation: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering"],
    },
    SimpelAdresseoplysning: {
      type: ["object"],
      properties: {
        startmyndighedskode: {
          type: ["string"],
        },
        startmyndighedsnavn: {
          type: ["string"],
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      required: ["startmyndighedskode", "startmyndighedsnavn", "virkningFra", "virkningTil", "SimpelAdresse"],
    },
    SimpelAdresseoplysningUdenVirkningTil: {
      type: ["object"],
      properties: {
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        SimpelAdresse: {
          $ref: "#/definitions/SimpelAdresse",
        },
      },
      additionalProperties: false,
      required: ["virkningFra", "SimpelAdresse"],
    },
    SimpelAdresse: {
      type: ["object"],
      properties: {
        adresselinie1: {
          type: ["string"],
        },
        adresselinie2: {
          type: ["string"],
        },
        adresselinie3: {
          type: ["string"],
        },
        adresselinie4: {
          type: ["string"],
        },
        adresselinie5: {
          type: ["string"],
        },
      },
      additionalProperties: false,
      required: ["adresselinie1", "adresselinie2", "adresselinie3", "adresselinie4", "adresselinie5"],
    },
    Statsborgerskab: {
      type: ["object"],
      properties: {
        cprlandekode: {
          type: "string",
        },
        cprlandenavn: {
          type: "string",
        },
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["cprlandekode", "cprlandenavn", "status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering"],
    },
    KommunaleForhold: {
      type: ["object"],
      properties: {
        bemaerkning: {
          type: ["string"],
        },
        kommunaleforholdskode: {
          type: "string",
        },
        KommunaleForholdsType: {
          type: "string",
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
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["bemaerkning", "kommunaleforholdskode", "KommunaleForholdsType", "virkningFra", "virkningFraUsikkerhedsmarkering"],
    },
    Valgoplysning: {
      type: ["object"],
      properties: {
        valgretsdato: {
          type: ["string"],
          format: "date-time",
        },
        ValgoplysningsType: {
          type: "string",
          enum: ["almindelig_valgret", "diplomater", "eu_valg_ja", "eu_valg_koebenhavn", "eu_valg_nej", "gamle_diplomater"],
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
      },
      additionalProperties: false,
      required: ["valgretsdato", "ValgoplysningsType", "virkningFra", "virkningTil"],
    },
    Folkekirke: {
      type: ["object"],
      properties: {
        Tilhoersforhold: {
          type: "string",
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
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["Tilhoersforhold", "status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering"],
    },
    Flyttepaabud: {
      type: ["object"],
      properties: {
        bemaerkning: {
          type: ["string"],
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
      },
      additionalProperties: false,
      required: ["bemaerkning", "virkningFra"],
    },
    Notat: {
      type: ["object"],
      properties: {
        notatlinie: {
          type: ["string"],
        },
        notatnummer: {
          type: ["integer"],
        },
        virkningFra: {
          type: ["string"],
          format: "date-time",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
      },
      additionalProperties: false,
      required: ["notatlinie", "notatnummer", "virkningFra", "virkningTil"],
    },
    Forsvinding: {
      type: ["object"],
      properties: {
        status: {
          $ref: "#/definitions/Status",
        },
        virkningFra: {
          type: "string",
          format: "date-time",
        },
        virkningFraUsikkerhedsmarkering: {
          type: "boolean",
        },
        virkningTil: {
          type: ["string"],
          format: "date-time",
        },
        virkningTilUsikkerhedsmarkering: {
          type: "boolean",
        },
      },
      additionalProperties: false,
      required: ["status", "virkningFra", "virkningFraUsikkerhedsmarkering", "virkningTil", "virkningTilUsikkerhedsmarkering"],
    },
    Navnemarkering: {
      type: ["string"],
      enum: [null, "forkortet", "indeholder_tegn_der_ikke_kan_indrapporteres_til_cpr", "utilstraekkeligt_dokumenteret"],
    },
  },
  required: ["Personer"],
};
