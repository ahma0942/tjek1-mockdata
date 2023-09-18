module.exports = {
  type: "array",
  minItems: 10,
  maxItems: 20,
  items: {
    type: "object",
    properties: {
      virksomhed: {
        type: "object",
        properties: {
          Id: {
            type: "string",
          },
          CVRNummer: {
            type: "integer",
            format: "cvr",
          },
          virksomhedStartdato: {
            type: "string",
            format: "date-time",
          },
          virksomhedOphoersdato: {
            type: "string",
            format: "date-time",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          status: {
            type: "string",
            enum: ["aktiv", "inaktiv"],
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: [
          "Id",
          "CVRNummer",
          "virksomhedStartdato",
          "virksomhedOphoersdato",
          "registreringFra",
          "registreringsaktoer",
          "registreringTil",
          "virkningFra",
          "virkningsaktoer",
          "virkningTil",
          "status",
          "metadata",
        ],
      },
      virksomhedsnavn: {
        type: "object",
        properties: {
          vaerdi: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["vaerdi", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      telefonnummer: {
        type: "object",
        properties: {
          vaerdi: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["vaerdi", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      "emailadresse": {
        type: "object",
        properties: {
          vaerdi: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["vaerdi", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      virksomhedsform: {
        type: "object",
        properties: {
          vaerdi: {
            type: "string",
          },
          vaerdiTekst: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: [
          "vaerdi",
          "vaerdiTekst",
          "registreringFra",
          "registreringsaktoer",
          "registreringTil",
          "virkningFra",
          "virkningsaktoer",
          "virkningTil",
          "metadata",
        ],
      },
      beliggenhedsadresse: {
        type: "object",
        properties: {
          adresse: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["adresse", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      postadresse: {
        type: "object",
        properties: {
          adresse: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["adresse", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      brancher: {
        type: "object",
        properties: {
          hovedbranche: {
            type: "object",
            properties: {
              vaerdi: {
                type: "string",
              },
              vaerdiTekst: {
                type: "string",
              },
              registreringFra: {
                type: "string",
                format: "date-time",
              },
              registreringsaktoer: {
                type: "string",
              },
              registreringTil: {
                type: "string",
                format: "date-time",
              },
              virkningFra: {
                type: "string",
                format: "date-time",
              },
              virkningsaktoer: {
                type: "string",
              },
              virkningTil: {
                type: "string",
                format: "date-time",
              },
              metadata: {
                $ref: "#/definitions/metadatatype",
              },
            },
            required: [
              "vaerdi",
              "vaerdiTekst",
              "registreringFra",
              "registreringsaktoer",
              "registreringTil",
              "virkningFra",
              "virkningsaktoer",
              "virkningTil",
              "metadata",
            ],
          },
          bibranche1: {
            type: "object",
            properties: {
              vaerdi: {
                type: "string",
              },
              vaerdiTekst: {
                type: "string",
              },
              registreringFra: {
                type: "string",
                format: "date-time",
              },
              registreringsaktoer: {
                type: "string",
              },
              registreringTil: {
                type: "string",
                format: "date-time",
              },
              virkningFra: {
                type: "string",
                format: "date-time",
              },
              virkningsaktoer: {
                type: "string",
              },
              virkningTil: {
                type: "string",
                format: "date-time",
              },
              metadata: {
                $ref: "#/definitions/metadatatype",
              },
            },
            required: [
              "vaerdi",
              "vaerdiTekst",
              "registreringFra",
              "registreringsaktoer",
              "registreringTil",
              "virkningFra",
              "virkningsaktoer",
              "virkningTil",
              "metadata",
            ],
          },
          bibranche2: {
            type: "object",
            properties: {
              vaerdi: {
                type: "string",
              },
              vaerdiTekst: {
                type: "string",
              },
              registreringFra: {
                type: "string",
                format: "date-time",
              },
              registreringsaktoer: {
                type: "string",
              },
              registreringTil: {
                type: "string",
                format: "date-time",
              },
              virkningFra: {
                type: "string",
                format: "date-time",
              },
              virkningsaktoer: {
                type: "string",
              },
              virkningTil: {
                type: "string",
                format: "date-time",
              },
              metadata: {
                $ref: "#/definitions/metadatatype",
              },
            },
            required: [
              "vaerdi",
              "vaerdiTekst",
              "registreringFra",
              "registreringsaktoer",
              "registreringTil",
              "virkningFra",
              "virkningsaktoer",
              "virkningTil",
              "metadata",
            ],
          },
          bibranche3: {
            type: "object",
            properties: {
              vaerdi: {
                type: "string",
              },
              vaerdiTekst: {
                type: "string",
              },
              registreringFra: {
                type: "string",
                format: "date-time",
              },
              registreringsaktoer: {
                type: "string",
              },
              registreringTil: {
                type: "string",
                format: "date-time",
              },
              virkningFra: {
                type: "string",
                format: "date-time",
              },
              virkningsaktoer: {
                type: "string",
              },
              virkningTil: {
                type: "string",
                format: "date-time",
              },
              metadata: {
                $ref: "#/definitions/metadatatype",
              },
            },
            required: [
              "vaerdi",
              "vaerdiTekst",
              "registreringFra",
              "registreringsaktoer",
              "registreringTil",
              "virkningFra",
              "virkningsaktoer",
              "virkningTil",
              "metadata",
            ],
          },
        },
        required: ["hovedbranche", "bibranche1", "bibranche2", "bibranche3"],
      },
      reklamebeskyttet: {
        type: "object",
        properties: {
          vaerdi: {
            type: "boolean",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: ["vaerdi", "registreringFra", "registreringsaktoer", "registreringTil", "virkningFra", "virkningsaktoer", "virkningTil", "metadata"],
      },
      kreditoplysninger: {
        type: "object",
        properties: {
          statusvaerdi: {
            type: "string",
          },
          statusvaerdiTekst: {
            type: "string",
          },
          kreditoplysning: {
            type: "string",
          },
          kreditoplysningstekst: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
        },
        metadata: {
          $ref: "#/definitions/metadatatype",
        },
        required: [
          "statusvaerdi",
          "statusvaerdiTekst",
          "kreditoplysning",
          "kreditoplysningstekst",
          "registreringFra",
          "registreringsaktoer",
          "registreringTil",
          "virkningFra",
          "virkningsaktoer",
          "virkningTil",
        ],
      },
      dataleverandoer: {
        type: "object",
        properties: {
          vaerdi: {
            type: "string",
          },
          vaerdiTekst: {
            type: "string",
          },
          registreringFra: {
            type: "string",
            format: "date-time",
          },
          registreringsaktoer: {
            type: "string",
          },
          registreringTil: {
            type: "string",
            format: "date-time",
          },
          virkningFra: {
            type: "string",
            format: "date-time",
          },
          virkningsaktoer: {
            type: "string",
          },
          virkningTil: {
            type: "string",
            format: "date-time",
          },
          metadata: {
            $ref: "#/definitions/metadatatype",
          },
        },
        required: [
          "vaerdi",
          "vaerdiTekst",
          "registreringFra",
          "registreringsaktoer",
          "registreringTil",
          "virkningFra",
          "virkningsaktoer",
          "virkningTil",
          "metadata",
        ],
      },
    },
    required: [
      "virksomhed",
      "virksomhedsnavn",
      "telefonnummer",
      "emailadresse",
      "virksomhedsform",
      "beliggenhedsadresse",
      "postadresse",
      "brancher",
      "reklamebeskyttet",
      "kreditoplysninger",
      "dataleverandoer",
    ],
  },
  definitions: {
    metadatatype: {
      type: "object",
      properties: {
        datafordelerOpdateringstid: {
          type: "string",
          format: "date-time",
        },
      },
      required: ["datafordelerOpdateringstid"],
    },
  },
};
