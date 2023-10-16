import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Select, { components } from "react-select";
import styled from "styled-components";

// import "./_menu.css";
// import theme from '../../themes';
import  { useTheme } from "styled-components";
// import { CheckboxOrigin as Checkbox } from "../Checkbox";
// import Typography from "../Typography";
import ClearIndicator from "./_clearIndicator";
import Indicator from "./_indicator";

const SelectBox = ({
  options = [],
  name,
  placeholder = "옵션을 선택하세요",
  disabled = false,
  handleKeyDown,
  defaultValue,
  label,
  isRequired,
  size = "sm",
  noStyle = false,
  isMulti = false,
  closeMenuOnSelect = true,
  hasCheckOption = false,
  alwaysBorder = false,
  hasEmptyValue = false,
  menuPlacement = "auto",
  ...props
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const form = useFormContext();
  const watch = form.watch(name);
  const defaultValueIndexArr = [];

  if (isMulti && defaultValue?.length) {
    for (const value of defaultValue) {
      const index = options.findIndex((item) => item.value === value);
      if (index !== -1) {
        defaultValueIndexArr.push(options[index]);
      }
    }
  }

  // isMulti일 때 value 값이 비면, 새로운 값으로 리렌더링하기 위한 로직
  const currentValue = [];
  if (isMulti && watch?.length) {
    for (const value of watch) {
      const index = options.findIndex((item) => item.value === value);
      if (index !== -1) {
        currentValue.push(options[index]);
      }
    }
  }

  // select 화살표 아이콘
  const DropdownIndicator = () => {
    return (
      <ImageBox>
        <Indicator colored={disabled} rotated={open} />
      </ImageBox>
    );
  };

  // select multi인 경우 clearAll 해주는 버튼 아이콘
  const ClearIndicatorComponent = (props) => {
    const { innerProps } = props;
    return (
      <ImageBox ref={innerProps.ref} {...innerProps}>
        <ClearIndicator />
      </ImageBox>
    );
  };
  // ClearIndicatorComponent.propTypes = {
  //   innerProps: PropTypes.any,
  // };

  // checkbox가 포함된 옵션 컴포넌트
  const CheckOptionComponent = (props) => {
    const { data, isSelected, selectProps } = props;
    return (
      components.Option && (
        <components.Option {...props}>
          {/* <Checkbox
            id={data.label}
            name={data.label}
            checkValue={isSelected}
            disabled={data.isDisabled}
            label={data.label}
            {...selectProps}
          /> */}
        </components.Option>
      )
    );
  };
  // CheckOptionComponent.propTypes = {
  //   data: PropTypes.any,
  //   selectProps: PropTypes.any,
  //   isSelected: PropTypes.bool,
  // };

  const MultipleCheckBoxOption = (props) => {
    const { data, isSelected, selectProps } = props;
    return <components.Option {...props} />;
  };

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      padding: "8px 12px",
      background: theme.colors.neutral[0],
      color: state.isSelected
        ? theme.colors.neutral[900]
        : state.isDisabled
        ? theme.colors.neutral[80]
        : theme.colors.neutral[700],

      ":hover": {
        background: theme.colors.neutral[20],
      },
      cursor: state.isDisabled ? "default" : "pointer",
    }),
    container: (styles) => ({
      ...styles,
      outlineStyle: "none",
      color: theme.colors.neutral[700],
      fontFamily: "Noto Sans KR",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "-0.05em",
      cursor: "pointer",
    }),

    control: (styles, state) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 0 6px 4px",
      background: state.isDisabled
        ? theme.colors.neutral[20]
        : state.isFocused || noStyle
        ? theme.colors.neutral[0]
        : theme.colors.neutral[20],
      color: theme.colors.neutral[900],
      border: noStyle
        ? "none"
        : state.isFocused || alwaysBorder
        ? `1px solid ${theme.colors.primary[300]}`
        : `1px solid transparent`,
      borderRadius: "8px",

      ":hover": {
        ...styles[":hover"],
        background:
          state.isFocused || noStyle
            ? theme.colors.neutral[0]
            : "rgba(9, 30, 66, 0.08);",
      },
      ":focus": {
        ...styles[":focus"],
        border: noStyle ? "none" : `1px solid ${theme.colors.primary[300]}`,
        background: theme.colors.neutral[0],
        outline: "none",
      },

      height: size === "md" ? "40px" : "32px",
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 10,
      animation: "fadeIn 0.2s ease-in-out",
    }),
    menuPortal: (styles) => ({
      ...styles,
      outlineStyle: "none",
    }),
    groupHeading: (styles) => ({
      ...styles,
      fontFamily: "Noto Sans KR",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "16px",
      color: theme.colors.neutral[80],
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: theme.colors.neutral[80],
    }),
    singleValue: (styles) => ({
      ...styles,
      color: disabled && defaultValue ? theme.colors.neutral[700] : "inherit",
    }),

    multiValue: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.neutral[40],
      padding: "2px 6px",
    }),

    multiValueLabel: (styles) => ({
      ...styles,
      color: theme.colors.neutral[700],
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "-0.05em",
      padding: 0,
      paddingLeft: 0,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      paddingRight: 0,
      color: theme.colors.neutral[700],
      ":hover": {
        backgroundColor: "inherit",
      },
      cursor: "pointer",
    }),
  };

  return (
    <Wrapper>
      {label && (
        <LabelBox>
          <Label>{label}</Label>
          {isRequired && <Required>*</Required>}
        </LabelBox>
      )}
      <StyledSelect
        id={name}
        components={{
          DropdownIndicator: () => <DropdownIndicator />,
          ClearIndicator: (props) => <ClearIndicatorComponent {...props} />,
          Option: (props) =>
            hasCheckOption ? (
              <CheckOptionComponent {...props} />
            ) : (
              <MultipleCheckBoxOption {...props} />
            ),
        }}
        instanceId={name}
        onMenuOpen={() => setOpen(true)}
        onMenuClose={() => setOpen(false)}
        placeholder={placeholder}
        styles={customStyles}
        options={options}
        isSearchable={false}
        isDisabled={disabled}
        noOptionsMessage={({ inputValue }) =>
          !inputValue ? "데이터가 없습니다." : "No results found"
        }
        menuPlacement={menuPlacement}
        onKeyDown={handleKeyDown}
        isMulti={isMulti || hasCheckOption}
        hideSelectedOptions={false}
        isClearable={isMulti || hasCheckOption}
        closeMenuOnSelect={closeMenuOnSelect}
        {...props}
        defaultValue={defaultValueIndexArr}
        {...(isMulti && hasEmptyValue ? { value: currentValue } : {})}
      />
    </Wrapper>
  );
};

export default SelectBox;

// SelectBox.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//       isDisabled: PropTypes.bool,
//     })
//   ),
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.bool,
//   handleKeyDown: PropTypes.func,
//   defaultValue: PropTypes.string,
//   label: PropTypes.string,
//   isRequired: PropTypes.bool,
//   size: PropTypes.oneOf(['sm', 'md']),
//   /**
//    * searchInput에서 사용하기 위한 props입니다.
//    */
//   noStyle: PropTypes.bool,
//   /**
//    * 여러 옵션 선택 (선택된 옵션은 chip모양)
//    */
//   isMulti: PropTypes.bool,
//   /**
//    * 옵션 선택 시 옵션 메뉴 닫는 유무
//    */
//   closeMenuOnSelect: PropTypes.bool,
//   /**
//    * 옵션에 체크박스 사용 시 true
//    */
//   hasCheckOption: PropTypes.bool,

//   /**
//    * 항상 border 출력
//    */
//   alwaysBorder: PropTypes.bool,
//   hasEmptyValue: PropTypes.bool,
//   menuPlacement: PropTypes.string,
// };

const Wrapper = styled.div``;

const StyledSelect = styled(Select)`
  @media screen and (max-width: 720px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ImageBox = styled.div`
  padding: 0px 12px 0px 0px;
  cursor: pointer;
`;

const LabelBox = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const Label = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const Required = styled.div`
  padding-top: 2px;
  padding-left: 2px;
  color: ${({ theme }) => theme.colors.red[400]};
`;
