import { Product } from 'shopify-buy';

export const mockGetAllProducts = [
  {
    id: "gid://shopify/Product/8171880677679",
    availableForSale: true,
    createdAt: "2023-03-12T03:10:44Z",
    updatedAt: "2023-03-12T03:10:47Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone14",
    productType: "Cases",
    title: "iPhone 14",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:10:46Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641071919",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641104687",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706227831087",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_8ed83c8d-d4e7-4cb0-a623-f6e99ec7c6ab.jpg?v=1678590644",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706227863855",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_d8450acf-3322-4cce-8b15-66cd3cd73e16.jpg?v=1678590644",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674164982063",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706227831087",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_8ed83c8d-d4e7-4cb0-a623-f6e99ec7c6ab.jpg?v=1678590644",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165014831",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706227831087",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_8ed83c8d-d4e7-4cb0-a623-f6e99ec7c6ab.jpg?v=1678590644",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165047599",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706227831087",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_8ed83c8d-d4e7-4cb0-a623-f6e99ec7c6ab.jpg?v=1678590644",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165080367",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706227831087",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_8ed83c8d-d4e7-4cb0-a623-f6e99ec7c6ab.jpg?v=1678590644",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: false,
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171880841519",
    availableForSale: true,
    createdAt: "2023-03-12T03:10:50Z",
    updatedAt: "2023-03-12T03:10:56Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone14-plus",
    productType: "Cases",
    title: "iPhone 14 Plus",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:10:52Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641268527",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641301295",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706228453679",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2edebdcb-97a8-4cf7-9470-18db936b9280.jpg?v=1678590650",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706228486447",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_55deb271-fbb6-45a5-a5ba-c17483410620.jpg?v=1678590650",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674165244207",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-plus-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228453679",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2edebdcb-97a8-4cf7-9470-18db936b9280.jpg?v=1678590650",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165276975",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone14-plus-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228453679",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2edebdcb-97a8-4cf7-9470-18db936b9280.jpg?v=1678590650",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165309743",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-plus-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228453679",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2edebdcb-97a8-4cf7-9470-18db936b9280.jpg?v=1678590650",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165342511",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-plus-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228453679",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2edebdcb-97a8-4cf7-9470-18db936b9280.jpg?v=1678590650",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171880939823",
    availableForSale: true,
    createdAt: "2023-03-12T03:10:54Z",
    updatedAt: "2023-03-12T03:10:56Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone14-pro",
    productType: "Cases",
    title: "iPhone 14 Pro",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:10:56Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641399599",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641432367",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706228683055",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ad926168-ab60-4a0f-b4ea-890943f2dda0.jpg?v=1678590654",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706228715823",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_78da2a50-1e26-4179-9cbb-a8e1ca41676d.jpg?v=1678590654",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674165440815",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-pro-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228683055",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ad926168-ab60-4a0f-b4ea-890943f2dda0.jpg?v=1678590654",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165473583",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-pro-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228683055",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ad926168-ab60-4a0f-b4ea-890943f2dda0.jpg?v=1678590654",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165506351",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-pro-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228683055",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ad926168-ab60-4a0f-b4ea-890943f2dda0.jpg?v=1678590654",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165539119",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-pro-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706228683055",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ad926168-ab60-4a0f-b4ea-890943f2dda0.jpg?v=1678590654",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881005359",
    availableForSale: true,
    createdAt: "2023-03-12T03:10:59Z",
    updatedAt: "2023-03-12T03:11:02Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone14-promax",
    productType: "Cases",
    title: "iPhone 14 Pro Max",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:01Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641497903",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641530671",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706229010735",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9a88baad-ac2b-4d2d-9f64-84e84c1fd9d2.jpg?v=1678590659",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706229043503",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_c6942f05-1de3-4123-ab1e-fd35bd8da5d5.jpg?v=1678590659",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674165604655",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-proMax-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229010735",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9a88baad-ac2b-4d2d-9f64-84e84c1fd9d2.jpg?v=1678590659",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165637423",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone14-proMax-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229010735",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9a88baad-ac2b-4d2d-9f64-84e84c1fd9d2.jpg?v=1678590659",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165670191",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-proMax-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229010735",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9a88baad-ac2b-4d2d-9f64-84e84c1fd9d2.jpg?v=1678590659",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165702959",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone14-proMax-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229010735",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9a88baad-ac2b-4d2d-9f64-84e84c1fd9d2.jpg?v=1678590659",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881070895",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:03Z",
    updatedAt: "2023-03-12T03:11:07Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone13",
    productType: "Cases",
    title: "iPhone 13",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:05Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641596207",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641628975",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706229338415",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f61e03c3-a09d-401b-ab21-bb6364357457.jpg?v=1678590664",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706229371183",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_a62cec18-90c3-48d9-a917-c77cfab14fe5.jpg?v=1678590664",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674165834031",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229338415",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f61e03c3-a09d-401b-ab21-bb6364357457.jpg?v=1678590664",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165866799",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229338415",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f61e03c3-a09d-401b-ab21-bb6364357457.jpg?v=1678590664",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165899567",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229338415",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f61e03c3-a09d-401b-ab21-bb6364357457.jpg?v=1678590664",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165932335",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229338415",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f61e03c3-a09d-401b-ab21-bb6364357457.jpg?v=1678590664",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881136431",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:08Z",
    updatedAt: "2023-03-12T03:11:10Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone13-mini",
    productType: "Cases",
    title: "iPhone 13 Mini",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:10Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641727279",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641760047",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706229666095",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_29b16e88-1e30-4828-95dc-3ebd2866ef0c.jpg?v=1678590668",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706229698863",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_da9fb247-8b01-4d21-b2b5-e133b90d7e1a.jpg?v=1678590668",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674165965103",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-mini-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229666095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_29b16e88-1e30-4828-95dc-3ebd2866ef0c.jpg?v=1678590668",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674165997871",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone13-mini-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229666095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_29b16e88-1e30-4828-95dc-3ebd2866ef0c.jpg?v=1678590668",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166030639",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-mini-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229666095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_29b16e88-1e30-4828-95dc-3ebd2866ef0c.jpg?v=1678590668",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166063407",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-mini-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229666095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_29b16e88-1e30-4828-95dc-3ebd2866ef0c.jpg?v=1678590668",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881169199",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:12Z",
    updatedAt: "2023-03-12T03:11:17Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone13-pro",
    productType: "Cases",
    title: "iPhone 13 Pro",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:14Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641792815",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375641858351",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706229928239",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9c949bb6-0c0d-4fcb-9d32-11187b5b097f.jpg?v=1678590673",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706229993775",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_93ee4aed-bc8a-4814-b9a8-4509b1c258ec.jpg?v=1678590673",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674166128943",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-pro-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229928239",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9c949bb6-0c0d-4fcb-9d32-11187b5b097f.jpg?v=1678590673",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166161711",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-pro-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229928239",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9c949bb6-0c0d-4fcb-9d32-11187b5b097f.jpg?v=1678590673",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166194479",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-pro-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229928239",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9c949bb6-0c0d-4fcb-9d32-11187b5b097f.jpg?v=1678590673",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166227247",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-pro-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706229928239",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9c949bb6-0c0d-4fcb-9d32-11187b5b097f.jpg?v=1678590673",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881300271",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:17Z",
    updatedAt: "2023-03-12T03:11:22Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone13-promax",
    productType: "Cases",
    title: "iPhone 13 Pro Max",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:19Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375641989423",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642022191",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706230911279",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_7e55f11a-03f8-4c2a-99f8-d6e27a386510.jpg?v=1678590677",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706230976815",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_2dcd1a68-53f1-4dfc-9b76-6f77ff941e75.jpg?v=1678590677",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674166620463",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-proMax-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706230911279",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_7e55f11a-03f8-4c2a-99f8-d6e27a386510.jpg?v=1678590677",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166653231",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-proMax-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706230911279",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_7e55f11a-03f8-4c2a-99f8-d6e27a386510.jpg?v=1678590677",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166685999",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-proMax-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706230911279",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_7e55f11a-03f8-4c2a-99f8-d6e27a386510.jpg?v=1678590677",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166718767",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone13-proMax-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706230911279",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_7e55f11a-03f8-4c2a-99f8-d6e27a386510.jpg?v=1678590677",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881333039",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:22Z",
    updatedAt: "2023-03-12T03:11:26Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone12",
    productType: "Cases",
    title: "iPhone 12",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:24Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642087727",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642120495",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706231075119",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bc8f8b44-2740-41c3-9605-fc5cd08f8119.jpg?v=1678590682",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706231107887",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_aa9d56b4-b647-4249-8703-33f33d73ece7.jpg?v=1678590682",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674166784303",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231075119",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bc8f8b44-2740-41c3-9605-fc5cd08f8119.jpg?v=1678590682",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166817071",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone12-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231075119",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bc8f8b44-2740-41c3-9605-fc5cd08f8119.jpg?v=1678590682",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166849839",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231075119",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bc8f8b44-2740-41c3-9605-fc5cd08f8119.jpg?v=1678590682",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166882607",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231075119",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bc8f8b44-2740-41c3-9605-fc5cd08f8119.jpg?v=1678590682",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881365807",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:26Z",
    updatedAt: "2023-03-12T03:11:32Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone12-mini",
    productType: "Cases",
    title: "iPhone 12 Mini",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:28Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642153263",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642186031",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706231304495",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_116e8dd3-48ec-4c09-b5e5-8e1c05be6502.jpg?v=1678590686",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706231337263",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_6ebb431a-0b55-4d2d-b07e-943295f9e466.jpg?v=1678590686",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674166915375",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-mini-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231304495",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_116e8dd3-48ec-4c09-b5e5-8e1c05be6502.jpg?v=1678590686",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166948143",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone12-mini-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231304495",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_116e8dd3-48ec-4c09-b5e5-8e1c05be6502.jpg?v=1678590686",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674166980911",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-mini-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231304495",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_116e8dd3-48ec-4c09-b5e5-8e1c05be6502.jpg?v=1678590686",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167013679",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-mini-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706231304495",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_116e8dd3-48ec-4c09-b5e5-8e1c05be6502.jpg?v=1678590686",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881464111",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:31Z",
    updatedAt: "2023-03-12T03:11:36Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone12-pro",
    productType: "Cases",
    title: "iPhone 12 Pro",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:33Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642284335",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642317103",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706232123695",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c8db0cf9-df18-4f7b-a9ff-246bf146d440.jpg?v=1678590691",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706232156463",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_89ee3d8d-8e2a-4e9d-94b6-bac6692fe69b.jpg?v=1678590691",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167111983",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-pro-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232123695",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c8db0cf9-df18-4f7b-a9ff-246bf146d440.jpg?v=1678590691",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167144751",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone12-pro-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232123695",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c8db0cf9-df18-4f7b-a9ff-246bf146d440.jpg?v=1678590691",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167177519",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-pro-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232123695",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c8db0cf9-df18-4f7b-a9ff-246bf146d440.jpg?v=1678590691",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167210287",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-pro-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232123695",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c8db0cf9-df18-4f7b-a9ff-246bf146d440.jpg?v=1678590691",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881496879",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:36Z",
    updatedAt: "2023-03-12T03:11:41Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone12-promax",
    productType: "Cases",
    title: "iPhone 12 Pro Max",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:38Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642349871",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642382639",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706232189231",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_1fead4ab-1198-4fe1-96f9-818ddb63541f.jpg?v=1678590696",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706232221999",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_3352eb2c-678e-4902-839d-56a100a9eed2.jpg?v=1678590696",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167243055",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-proMax-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232189231",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_1fead4ab-1198-4fe1-96f9-818ddb63541f.jpg?v=1678590696",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167275823",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "iphone12-proMax-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232189231",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_1fead4ab-1198-4fe1-96f9-818ddb63541f.jpg?v=1678590696",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167308591",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-proMax-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232189231",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_1fead4ab-1198-4fe1-96f9-818ddb63541f.jpg?v=1678590696",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167341359",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone12-proMax-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232189231",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_1fead4ab-1198-4fe1-96f9-818ddb63541f.jpg?v=1678590696",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881595183",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:45Z",
    updatedAt: "2023-03-12T03:11:52Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone11",
    productType: "Cases",
    title: "iPhone 11",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:47Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642513711",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642546479",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706232910127",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f678333c-a12c-451d-8e73-dc822c4d79e4.jpg?v=1678590706",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706232942895",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_ba298b4f-14bf-4b72-bf0f-e3ef7be85b14.jpg?v=1678590706",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167439663",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232910127",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f678333c-a12c-451d-8e73-dc822c4d79e4.jpg?v=1678590706",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167472431",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232910127",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f678333c-a12c-451d-8e73-dc822c4d79e4.jpg?v=1678590706",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167505199",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232910127",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f678333c-a12c-451d-8e73-dc822c4d79e4.jpg?v=1678590706",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167537967",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232910127",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_f678333c-a12c-451d-8e73-dc822c4d79e4.jpg?v=1678590706",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881660719",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:50Z",
    updatedAt: "2023-03-12T03:11:55Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone11-pro",
    productType: "Cases",
    title: "iPhone 11 Pro",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:52Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642644783",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642677551",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706232975663",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_3ca50d75-f994-4b39-9f9b-10438639c99b.jpg?v=1678590710",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706233008431",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_8a596ec3-aca4-48dd-90c7-afdc3b0c04f1.jpg?v=1678590710",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167636271",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-pro-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232975663",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_3ca50d75-f994-4b39-9f9b-10438639c99b.jpg?v=1678590710",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167669039",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-pro-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232975663",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_3ca50d75-f994-4b39-9f9b-10438639c99b.jpg?v=1678590710",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167701807",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-pro-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232975663",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_3ca50d75-f994-4b39-9f9b-10438639c99b.jpg?v=1678590710",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167734575",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-pro-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706232975663",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_3ca50d75-f994-4b39-9f9b-10438639c99b.jpg?v=1678590710",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881726255",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:55Z",
    updatedAt: "2023-03-12T03:12:03Z",
    descriptionHtml: "",
    description: "",
    handle: "iphone11-promax",
    productType: "Cases",
    title: "iPhone 11 Pro Max",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:11:57Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642743087",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642775855",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706233532719",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_0b4c475f-1a3d-4dc3-ad10-d9b69aa3e94d.jpg?v=1678590715",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706233565487",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_4afbe8ee-d335-4abb-b181-784dfd9482ce.jpg?v=1678590715",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167800111",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-proMax-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233532719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_0b4c475f-1a3d-4dc3-ad10-d9b69aa3e94d.jpg?v=1678590715",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167832879",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-proMax-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233532719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_0b4c475f-1a3d-4dc3-ad10-d9b69aa3e94d.jpg?v=1678590715",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167865647",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-proMax-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233532719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_0b4c475f-1a3d-4dc3-ad10-d9b69aa3e94d.jpg?v=1678590715",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167898415",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphone11-proMax-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233532719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_0b4c475f-1a3d-4dc3-ad10-d9b69aa3e94d.jpg?v=1678590715",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881791791",
    availableForSale: true,
    createdAt: "2023-03-12T03:11:59Z",
    updatedAt: "2023-03-12T03:12:04Z",
    descriptionHtml: "",
    description: "",
    handle: "iphonex-xs",
    productType: "Cases",
    title: "iPhone X/XS",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:01Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375642874159",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375642906927",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706233631023",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9ff08006-cf2a-497e-9ec4-b0cae5614edf.jpg?v=1678590720",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706233663791",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_90169804-e517-4192-81dc-30d913b657d2.jpg?v=1678590720",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674167963951",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneX/XS-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233631023",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9ff08006-cf2a-497e-9ec4-b0cae5614edf.jpg?v=1678590720",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674167996719",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneX/XS-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233631023",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9ff08006-cf2a-497e-9ec4-b0cae5614edf.jpg?v=1678590720",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674168029487",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneX/XS-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233631023",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9ff08006-cf2a-497e-9ec4-b0cae5614edf.jpg?v=1678590720",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674168062255",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneX/XS-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233631023",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9ff08006-cf2a-497e-9ec4-b0cae5614edf.jpg?v=1678590720",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171881890095",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:04Z",
    updatedAt: "2023-03-12T03:12:06Z",
    descriptionHtml: "",
    description: "",
    handle: "iphonexs-max",
    productType: "Cases",
    title: "iPhone XS Max",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:06Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643037999",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643070767",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706233925935",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_beace3a0-49a5-42ba-817b-37f836158c65.jpg?v=1678590724",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706233958703",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_d2cef4b5-3148-4850-b77f-53930e59a30a.jpg?v=1678590724",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674168455471",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXS-max-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233925935",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_beace3a0-49a5-42ba-817b-37f836158c65.jpg?v=1678590724",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674168488239",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXS-max-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233925935",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_beace3a0-49a5-42ba-817b-37f836158c65.jpg?v=1678590724",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674168521007",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXS-max-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233925935",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_beace3a0-49a5-42ba-817b-37f836158c65.jpg?v=1678590724",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674168553775",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXS-max-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706233925935",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_beace3a0-49a5-42ba-817b-37f836158c65.jpg?v=1678590724",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882021167",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:09Z",
    updatedAt: "2023-03-12T03:12:13Z",
    descriptionHtml: "",
    description: "",
    handle: "iphonexr",
    productType: "Cases",
    title: "iPhone XR",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:11Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643234607",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643267375",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706234253615",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_4bb7b7e2-70f5-4b9b-b2cd-422e8d418cd9.jpg?v=1678590729",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706234286383",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_1fb03c43-d955-4d25-9093-113df5160008.jpg?v=1678590729",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674171732271",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXR-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234253615",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_4bb7b7e2-70f5-4b9b-b2cd-422e8d418cd9.jpg?v=1678590729",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674171765039",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXR-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234253615",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_4bb7b7e2-70f5-4b9b-b2cd-422e8d418cd9.jpg?v=1678590729",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674171797807",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXR-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234253615",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_4bb7b7e2-70f5-4b9b-b2cd-422e8d418cd9.jpg?v=1678590729",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674171830575",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "iphoneXR-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234253615",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_4bb7b7e2-70f5-4b9b-b2cd-422e8d418cd9.jpg?v=1678590729",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882152239",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:13Z",
    updatedAt: "2023-03-12T03:12:18Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys22",
    productType: "Cases",
    title: "Galaxy S22",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:14Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643398447",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643431215",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706234745135",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_06d4cea6-9011-4b20-b1b9-71fa7537a544.jpg?v=1678590733",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706234777903",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_b43090ef-f80e-4962-9026-83f6164e5533.jpg?v=1678590733",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674171961647",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234745135",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_06d4cea6-9011-4b20-b1b9-71fa7537a544.jpg?v=1678590733",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674171994415",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys22-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234745135",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_06d4cea6-9011-4b20-b1b9-71fa7537a544.jpg?v=1678590733",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172027183",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234745135",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_06d4cea6-9011-4b20-b1b9-71fa7537a544.jpg?v=1678590733",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172059951",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706234745135",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_06d4cea6-9011-4b20-b1b9-71fa7537a544.jpg?v=1678590733",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882250543",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:16Z",
    updatedAt: "2023-03-12T03:12:21Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys22-plus",
    productType: "Cases",
    title: "Galaxy S22 Plus",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:17Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643529519",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643562287",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706235138351",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9960348f-78a8-4f32-be24-8e1124d2e479.jpg?v=1678590736",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674172158255",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-plus-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706235138351",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9960348f-78a8-4f32-be24-8e1124d2e479.jpg?v=1678590736",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882381615",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:20Z",
    updatedAt: "2023-03-12T03:12:25Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys22-ultra",
    productType: "Cases",
    title: "Galaxy S22 Ultra",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:21Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643693359",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643726127",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706235760943",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_5aa9930b-8301-4157-a8b0-f42514d8306e.jpg?v=1678590740",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706235793711",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_e182366c-e0db-40c4-8048-ac323a87b07d.jpg?v=1678590740",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674172289327",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-ultra-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706235760943",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_5aa9930b-8301-4157-a8b0-f42514d8306e.jpg?v=1678590740",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172322095",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys22-ultra-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706235760943",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_5aa9930b-8301-4157-a8b0-f42514d8306e.jpg?v=1678590740",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172354863",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-ultra-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706235760943",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_5aa9930b-8301-4157-a8b0-f42514d8306e.jpg?v=1678590740",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172387631",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys22-ultra-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706235760943",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_5aa9930b-8301-4157-a8b0-f42514d8306e.jpg?v=1678590740",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882479919",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:23Z",
    updatedAt: "2023-03-12T03:12:26Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys21",
    productType: "Cases",
    title: "Galaxy S21",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:24Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643857199",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643889967",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706236088623",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ba960ee4-cf59-4e64-a7cd-bcd1adb2236c.jpg?v=1678590743",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706236121391",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_a2ef1167-89af-4ea8-b208-12bea658ddbe.jpg?v=1678590743",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674172485935",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236088623",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ba960ee4-cf59-4e64-a7cd-bcd1adb2236c.jpg?v=1678590743",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172518703",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys21-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236088623",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ba960ee4-cf59-4e64-a7cd-bcd1adb2236c.jpg?v=1678590743",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172551471",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236088623",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ba960ee4-cf59-4e64-a7cd-bcd1adb2236c.jpg?v=1678590743",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172584239",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236088623",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_ba960ee4-cf59-4e64-a7cd-bcd1adb2236c.jpg?v=1678590743",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882545455",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:27Z",
    updatedAt: "2023-03-12T03:12:32Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys21-fe",
    productType: "Cases",
    title: "Galaxy S21 FE",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:28Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375643955503",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375643988271",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706236907823",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_b104d2e7-ca49-42fe-a083-9aad2d866a8f.jpg?v=1678590747",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706236940591",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_bab2ea13-d525-4f82-b4fd-ca31362c91ed.jpg?v=1678590747",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674172649775",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-fe-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236907823",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_b104d2e7-ca49-42fe-a083-9aad2d866a8f.jpg?v=1678590747",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172682543",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys21-fe-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236907823",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_b104d2e7-ca49-42fe-a083-9aad2d866a8f.jpg?v=1678590747",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172715311",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-fe-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236907823",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_b104d2e7-ca49-42fe-a083-9aad2d866a8f.jpg?v=1678590747",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674172748079",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-fe-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706236907823",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_b104d2e7-ca49-42fe-a083-9aad2d866a8f.jpg?v=1678590747",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882709295",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:30Z",
    updatedAt: "2023-03-12T03:12:32Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys21-plus",
    productType: "Cases",
    title: "Galaxy S21 Plus",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:31Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644184879",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644217647",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706237628719",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9eaf4aa5-1b56-4d01-9aed-05880d48466d.jpg?v=1678590750",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706237661487",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_65738a83-c6a8-4432-97e6-401426dc42a5.jpg?v=1678590750",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173042991",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-plus-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237628719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9eaf4aa5-1b56-4d01-9aed-05880d48466d.jpg?v=1678590750",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173075759",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys21-plus-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237628719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9eaf4aa5-1b56-4d01-9aed-05880d48466d.jpg?v=1678590750",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173108527",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-plus-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237628719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9eaf4aa5-1b56-4d01-9aed-05880d48466d.jpg?v=1678590750",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173141295",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-plus-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237628719",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_9eaf4aa5-1b56-4d01-9aed-05880d48466d.jpg?v=1678590750",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882807599",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:34Z",
    updatedAt: "2023-03-12T03:12:36Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys21-ultra",
    productType: "Cases",
    title: "Galaxy S21 Ultra",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:35Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644315951",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644348719",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706237858095",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bb44e511-b0bb-4aed-acef-3d65c4282956.jpg?v=1678590754",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706237890863",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_51bbebc8-e5fd-465b-9ba0-2f2f2a688edc.jpg?v=1678590754",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173239599",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-ultra-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237858095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bb44e511-b0bb-4aed-acef-3d65c4282956.jpg?v=1678590754",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173272367",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys21-ultra-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237858095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bb44e511-b0bb-4aed-acef-3d65c4282956.jpg?v=1678590754",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173305135",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-ultra-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237858095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bb44e511-b0bb-4aed-acef-3d65c4282956.jpg?v=1678590754",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173337903",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys21-ultra-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706237858095",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_bb44e511-b0bb-4aed-acef-3d65c4282956.jpg?v=1678590754",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882905903",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:37Z",
    updatedAt: "2023-03-12T03:12:42Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys20",
    productType: "Cases",
    title: "Galaxy S20",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:38Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644447023",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644479791",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706238415151",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2197c4d8-ae66-4fac-a20b-963862ef6301.jpg?v=1678590757",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706238447919",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_27bc4ab6-42dd-4c81-a359-cbeebbeecdb2.jpg?v=1678590757",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173436207",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238415151",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2197c4d8-ae66-4fac-a20b-963862ef6301.jpg?v=1678590757",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173468975",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys20-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238415151",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2197c4d8-ae66-4fac-a20b-963862ef6301.jpg?v=1678590757",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173501743",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238415151",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2197c4d8-ae66-4fac-a20b-963862ef6301.jpg?v=1678590757",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173534511",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238415151",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2197c4d8-ae66-4fac-a20b-963862ef6301.jpg?v=1678590757",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171882971439",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:40Z",
    updatedAt: "2023-03-12T03:12:46Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys20-fe",
    productType: "Cases",
    title: "Galaxy S20 FE",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:42Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644545327",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644578095",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706238710063",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_25322df1-3e65-438a-ad3f-74653b64f241.jpg?v=1678590760",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706238742831",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_bea875a8-c078-4abe-bce1-44138a1fa3d7.jpg?v=1678590760",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173600047",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-fe-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238710063",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_25322df1-3e65-438a-ad3f-74653b64f241.jpg?v=1678590760",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173632815",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys20-fe-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238710063",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_25322df1-3e65-438a-ad3f-74653b64f241.jpg?v=1678590760",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173665583",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys20-fe-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238710063",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_25322df1-3e65-438a-ad3f-74653b64f241.jpg?v=1678590760",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173698351",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-fe-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706238710063",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_25322df1-3e65-438a-ad3f-74653b64f241.jpg?v=1678590760",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171883102511",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:44Z",
    updatedAt: "2023-03-12T03:12:46Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys20-plus",
    productType: "Cases",
    title: "Galaxy S20 Plus",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:45Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644709167",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644741935",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706239299887",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c32f1f2e-d278-4219-94be-03ce902a4a41.jpg?v=1678590764",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706239332655",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_45ed5737-f557-4d77-9de7-c0828c0d07a7.jpg?v=1678590764",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173829423",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-plus-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239299887",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c32f1f2e-d278-4219-94be-03ce902a4a41.jpg?v=1678590764",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173862191",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys20-plus-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239299887",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c32f1f2e-d278-4219-94be-03ce902a4a41.jpg?v=1678590764",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173894959",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-plus-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239299887",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c32f1f2e-d278-4219-94be-03ce902a4a41.jpg?v=1678590764",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674173927727",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-plus-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239299887",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_c32f1f2e-d278-4219-94be-03ce902a4a41.jpg?v=1678590764",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: {
      value: true
    },
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  },
  {
    id: "gid://shopify/Product/8171883168047",
    availableForSale: true,
    createdAt: "2023-03-12T03:12:47Z",
    updatedAt: "2023-03-12T03:12:51Z",
    descriptionHtml: "",
    description: "",
    handle: "galaxys20-ultra",
    productType: "Cases",
    title: "Galaxy S20 Ultra",
    vendor: "PhamLuxe",
    publishedAt: "2023-03-12T03:12:48Z",
    onlineStoreUrl: null,
    options: [
      {
        id: "gid://shopify/ProductOption/10375644807471",
        name: "Type",
        values: [
          {
            value: "Snap",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Tough",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      },
      {
        id: "gid://shopify/ProductOption/10375644840239",
        name: "Finish",
        values: [
          {
            value: "Matte",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          },
          {
            value: "Glossy",
            type: {
              name: "String",
              kind: "SCALAR"
            }
          }
        ],
        type: {
          name: "ProductOption",
          kind: "OBJECT",
          fieldBaseTypes: {
            name: "String",
            values: "String"
          },
          implementsNode: true
        }
      }
    ],
    images: [
      {
        id: "gid://shopify/ProductImage/40706239660335",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2330619c-b132-460e-b8e8-6a1f2429bd77.jpg?v=1678590767",
        altText: null,
        width: 3209,
        height: 4813,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductImage/40706239693103",
        src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone2_fd703625-6715-4f82-a5ff-5654046bb815.jpg?v=1678590767",
        altText: null,
        width: 3583,
        height: 5368,
        type: {
          name: "Image",
          kind: "OBJECT",
          fieldBaseTypes: {
            altText: "String",
            height: "Int",
            id: "ID",
            url: "URL",
            width: "Int"
          },
          implementsNode: false
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    variants: [
      {
        id: "gid://shopify/ProductVariant/44674173993263",
        title: "Snap / Matte",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-ultra-snap-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239660335",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2330619c-b132-460e-b8e8-6a1f2429bd77.jpg?v=1678590767",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: false,
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674174026031",
        title: "Snap / Glossy",
        price: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "33.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: false,
        sku: "galaxys20-ultra-snap-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239660335",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2330619c-b132-460e-b8e8-6a1f2429bd77.jpg?v=1678590767",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Snap",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674174058799",
        title: "Tough / Matte",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-ultra-tough-matte",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239660335",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2330619c-b132-460e-b8e8-6a1f2429bd77.jpg?v=1678590767",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Matte",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: {
          value: true
        },
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      },
      {
        id: "gid://shopify/ProductVariant/44674174091567",
        title: "Tough / Glossy",
        price: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        priceV2: {
          amount: "47.95",
          currencyCode: "AUD",
          type: {
            name: "MoneyV2",
            kind: "OBJECT",
            fieldBaseTypes: {
              amount: "Decimal",
              currencyCode: "CurrencyCode"
            },
            implementsNode: false
          }
        },
        weight: 500,
        available: true,
        sku: "galaxys20-ultra-tough-glossy",
        compareAtPrice: null,
        compareAtPriceV2: null,
        image: {
          id: "gid://shopify/ProductImage/40706239660335",
          src: "https://cdn.shopify.com/s/files/1/0712/5300/0495/products/Phone1_2330619c-b132-460e-b8e8-6a1f2429bd77.jpg?v=1678590767",
          altText: null,
          width: 3209,
          height: 4813,
          type: {
            name: "Image",
            kind: "OBJECT",
            fieldBaseTypes: {
              altText: "String",
              height: "Int",
              id: "ID",
              url: "URL",
              width: "Int"
            },
            implementsNode: false
          }
        },
        selectedOptions: [
          {
            name: "Type",
            value: "Tough",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          },
          {
            name: "Finish",
            value: "Glossy",
            type: {
              name: "SelectedOption",
              kind: "OBJECT",
              fieldBaseTypes: {
                name: "String",
                value: "String"
              },
              implementsNode: false
            }
          }
        ],
        unitPrice: null,
        unitPriceMeasurement: {
          measuredType: null,
          quantityUnit: null,
          quantityValue: 0,
          referenceUnit: null,
          referenceValue: 0,
          type: {
            name: "UnitPriceMeasurement",
            kind: "OBJECT",
            fieldBaseTypes: {
              measuredType: "UnitPriceMeasurementMeasuredType",
              quantityUnit: "UnitPriceMeasurementMeasuredUnit",
              quantityValue: "Float",
              referenceUnit: "UnitPriceMeasurementMeasuredUnit",
              referenceValue: "Int"
            },
            implementsNode: false
          }
        },
        type: {
          name: "ProductVariant",
          kind: "OBJECT",
          fieldBaseTypes: {
            availableForSale: "Boolean",
            compareAtPrice: "MoneyV2",
            id: "ID",
            image: "Image",
            price: "MoneyV2",
            product: "Product",
            selectedOptions: "SelectedOption",
            sku: "String",
            title: "String",
            unitPrice: "MoneyV2",
            unitPriceMeasurement: "UnitPriceMeasurement",
            weight: "Float"
          },
          implementsNode: true
        },
        hasNextPage: false,
        hasPreviousPage: {
          value: true
        },
        variableValues: {
          first: 250
        }
      }
    ],
    type: {
      name: "Product",
      kind: "OBJECT",
      fieldBaseTypes: {
        availableForSale: "Boolean",
        createdAt: "DateTime",
        description: "String",
        descriptionHtml: "HTML",
        handle: "String",
        id: "ID",
        images: "ImageConnection",
        onlineStoreUrl: "URL",
        options: "ProductOption",
        productType: "String",
        publishedAt: "DateTime",
        title: "String",
        updatedAt: "DateTime",
        variants: "ProductVariantConnection",
        vendor: "String"
      },
      implementsNode: true
    },
    hasNextPage: false,
    hasPreviousPage: {
      value: true
    },
    variableValues: {
      first: 250
    }
  }
] as unknown as Product[];
