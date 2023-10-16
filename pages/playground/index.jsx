import Input from "../../components/Input";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../../components/Form";
import { useEffect, useMemo, useCallback, useState } from "react";
import { findStores } from "../../hook/useStore/fetch";
import Select from "../../components/Select";

export async function getServerSideProps(ctx) {
  // const stores = await findStores();

  return {
    props: {
      initialData: {
        // stores: stores.data.items,
      },
    },
  };
}

const Page = ({ initialData }) => {
  const form = useForm();
  const watchedOptions = form.watch("select");
  const [newOptions, setNewOptions] = useState([]);

  const options = [
    {
      name: "종류",
      values: [
        {
          systemCode: "a",
          name: "a",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "a",
          label: "a",
        },
        {
          systemCode: "b",
          name: "b",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "b",
          label: "b",
        },
        {
          systemCode: "c",
          name: "c",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "c",
          label: "c",
        },
      ],
    },
    {
      name: "색상",
      values: [
        {
          systemCode: "빨강",
          name: "빨강",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "빨강",
          label: "빨강",
        },
        {
          systemCode: "노랑",
          name: "노랑",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "노랑",
          label: "노랑",
        },
        {
          systemCode: "초록",
          name: "초록",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "초록",
          label: "초록",
        },
      ],
    },
    {
      name: "사이즈",
      values: [
        {
          systemCode: "스몰",
          name: "스몰",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "스몰",
          label: "스몰",
        },
        {
          systemCode: "미디움",
          name: "미디움",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "미디움",
          label: "미디움",
        },
        {
          systemCode: "라지",
          name: "라지",
          imageLocations: [
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
            "https://picsum.photos/200",
          ],
          value: "라지",
          label: "라지",
        },
      ],
    },
  ];

  const variantOptions = [
    // {
    //   systemCode: "a빨강스몰",
    //   imageLocations: [
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //   ],
    //   name: "a/빨강/스몰",
    //   optionValueSystemCodes: ["a", "빨강", "스몰"],
    //   sellable: true,
    //   currencyId: "$",
    //   // additionalAmount: faker.number.int(100),
    //   // skuStockStatus: SkuStockType.IN_STOCK,
    //   skuCurrentStock: 10,
    // },
    // {
    //   systemCode: "a빨강미디움",
    //   imageLocations: [
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //   ],
    //   name: "a/빨강/미디움",
    //   optionValueSystemCodes: ["a", "빨강", "미디움"],
    //   sellable: true,
    //   currencyId: "$",
    //   // additionalAmount: faker.number.int(100),
    //   // skuStockStatus: SkuStockType.LOW_STOCK,
    //   skuCurrentStock: 10,
    // },
    // {
    //   systemCode: "a빨강라지",
    //   imageLocations: [
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //   ],
    //   name: "a/빨강/라지",
    //   optionValueSystemCodes: ["a", "빨강", "라지"],
    //   sellable: false,
    //   currencyId: "$",
    //   // additionalAmount: faker.number.int(100),
    //   // skuStockStatus: SkuStockType.OUT_OF_STOCK,
    //   skuCurrentStock: 10,
    // },

    {
      systemCode: "b빨강스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/빨강/스몰",
      optionValueSystemCodes: ["b", "빨강", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b빨강미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/빨강/미디움",
      optionValueSystemCodes: ["b", "빨강", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.LOW_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b빨강라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/빨강/라지",
      optionValueSystemCodes: ["b", "빨강", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    //
    {
      systemCode: "c빨강스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "c/빨강/스몰",
      optionValueSystemCodes: ["c", "빨강", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "c빨강미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "c/빨강/미디움",
      optionValueSystemCodes: ["c", "빨강", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.LOW_STOCK,
      skuCurrentStock: 10,
    },
    // {
    //   systemCode: "c빨강라지",
    //   imageLocations: [
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //   ],
    //   name: "c/빨강/라지",
    //   optionValueSystemCodes: ["c", "빨강", "라지"],
    //   sellable: false,
    //   currencyId: "$",
    //   // additionalAmount: faker.number.int(100),
    //   // skuStockStatus: SkuStockType.OUT_OF_STOCK,
    //   skuCurrentStock: 10,
    // },

    // {
    //   systemCode: "a노랑스몰",
    //   imageLocations: [
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //     "https://picsum.photos/200",
    //   ],
    //   name: "a/노랑/스몰",
    //   optionValueSystemCodes: ["a", "노랑", "스몰"],
    //   sellable: true,
    //   currencyId: "$",
    //   // additionalAmount: faker.number.int(100),
    //   // skuStockStatus: SkuStockType.IN_STOCK,
    //   skuCurrentStock: 10,
    // },
    {
      systemCode: "a노랑미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "a/노랑/미디움",
      optionValueSystemCodes: ["a", "노랑", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.LOW_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "a노랑라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "a/노랑/라지",
      optionValueSystemCodes: ["a", "노랑", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    //
    {
      systemCode: "b노랑스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/노랑/스몰",
      optionValueSystemCodes: ["b", "노랑", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b노랑미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/노랑/미디움",
      optionValueSystemCodes: ["b", "노랑", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.LOW_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b노랑라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/노랑/라지",
      optionValueSystemCodes: ["b", "노랑", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    //
    {
      systemCode: "c노랑스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "c/노랑/스몰",
      optionValueSystemCodes: ["c", "노랑", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "c노랑미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "c/노랑/미디움",
      optionValueSystemCodes: ["c", "노랑", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.LOW_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "c노랑라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "c/노랑/라지",
      optionValueSystemCodes: ["c", "노랑", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },

    {
      systemCode: "a초록스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "a/초록/스몰",
      optionValueSystemCodes: ["a", "초록", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "a초록미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "a/초록/미디움",
      optionValueSystemCodes: ["a", "초록", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "a초록라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "a/초록/라지",
      optionValueSystemCodes: ["a", "초록", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    //
    {
      systemCode: "b초록스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/스몰",
      optionValueSystemCodes: ["b", "초록", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b초록미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/미디움",
      optionValueSystemCodes: ["b", "초록", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "b초록라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/라지",
      optionValueSystemCodes: ["b", "초록", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    //
    {
      systemCode: "c초록스몰",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/스몰",
      optionValueSystemCodes: ["c", "초록", "스몰"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "c초록미디움",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/미디움",
      optionValueSystemCodes: ["c", "초록", "미디움"],
      sellable: true,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.OUT_OF_STOCK,
      skuCurrentStock: 10,
    },
    {
      systemCode: "c초록라지",
      imageLocations: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
      name: "b/초록/라지",
      optionValueSystemCodes: ["c", "초록", "라지"],
      sellable: false,
      currencyId: "$",
      // additionalAmount: faker.number.int(100),
      // skuStockStatus: SkuStockType.IN_STOCK,
      skuCurrentStock: 10,
    },
  ];

  //초기 옵션에 대한 filter
  const initialVariantOptions = variantOptions.filter((variantOption) => {
    // variantOption의 optionValueSystemCodes 배열의 각 항목이 options 배열의 어떤 객체의 systemCode와 일치하는지 확인
    return variantOption.optionValueSystemCodes.some((optionCode) => {
      // options 배열의 어떤 객체의 systemCode와 일치하는 경우 true 반환하고 필터링에 포함됨
      return options.some((option) =>
        option.values.some((value) => value.systemCode === optionCode)
      );
    });
  });

  // filteredVariantOptions에 포함된 optionValueSystemCodes들을 추출
  const matchedOptionValueSystemCodes = initialVariantOptions.flatMap(
    (variantOption) => variantOption.optionValueSystemCodes
  );
  // options 배열을 필터링하여 matchedOptionValueSystemCodes에 포함된 systemCode를 가진 options의 values를 추출
  const initialOptions = options.map((option) => ({
    ...option,
    values: option.values.filter((value) =>
      matchedOptionValueSystemCodes.includes(value.systemCode)
    ),
  }));

  const [optionList, setOptionList] = useState(initialOptions);

  const handleChange = (val, item, index, name) => {
    const valueList =
      initialOptions[index + 1] !== undefined &&
      initialOptions[index + 1]?.values;

    const filteredWatchedOptions =
      watchedOptions === undefined
        ? [val]
        : watchedOptions?.filter((op) => op !== undefined);

    form.setValue(`select.${index + 1}`, undefined);

    const filteredVariantOptions = initialVariantOptions.filter((variant) => {
      return filteredWatchedOptions?.every((option) =>
        variant.optionValueSystemCodes.includes(option)
      );
    });

    const matchedOptionValueSystemCodes = filteredVariantOptions.flatMap(
      (variantOption) => variantOption.optionValueSystemCodes
    );

    const filteredOptions =
      valueList !== false &&
      valueList?.filter((value) =>
        matchedOptionValueSystemCodes.includes(value.systemCode)
      );

    setNewOptions([
      // ...newOptions,
      {
        name: initialOptions[index + 1]?.name,
        index: index + 1,
        values: filteredOptions,
      },
    ]);
  };

  useEffect(() => {
    if (newOptions.length === 0) {
      return;
    } else {
      const updatedOptions = initialOptions.map((option) => {
        const foundTargetOption = newOptions.find(
          (target) => target.name === option.name
        );

        // 만약 동일한 name을 가진 targetOption이 있다면 해당 객체로 교체
        if (foundTargetOption) {
          return foundTargetOption;
        }

        // 동일한 name을 가진 targetOption이 없으면 기존의 option 객체 유지
        return option;
      });

      setOptionList(updatedOptions);
      setNewOptions([])
    }
  }, [newOptions]);
  console.log("🚀 ~ file: index.jsx:680 ~ Page ~ newOptions:", optionList);

  return (
    <Wrapper>
      <Form form={form}>
        {/* {renderSelect} */}
        {optionList.map((op, index) => (
          <Select
            name={`select.${index}`}
            options={op.values}
            key={op.name}
            onValueChange={(val, item) =>
              handleChange(val, item, index, op.name)
            }
          />
        ))}
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Card = styled.div``;

export default Page;
