import { Controller, get, useFormContext } from "react-hook-form";
import styled from "styled-components";

// import Typography from "../Typography";
import SelectBox from "./Select";

const Component = ({
  name,
  options = [],
  defaultValue,
  handleClick,
  onValueChange,
  width = "",
  ...props
}) => {
  const { control, formState } = useFormContext();
  const dv = get(
    control._defaultValues,
    name,
    typeof defaultValue !== "undefined" ? defaultValue : undefined
  );

  const errors = get(formState.errors, name);

  return (
    <Wrapper $width={width}>
      <Controller
        control={control}
        name={name}
        defaultValue={dv}
        render={({ field: { onChange, value } }) => {
          return (
            <SelectBox
              name={name}
              options={options}
              onChange={async (e) => {
                let val;
                if (Array.isArray(e)) {
                  // isMulti = true인 경우 (checkbox옵션 포함)
                  const valArr = e.map((el) => el.value);
                  val = valArr;
                } else {
                  val = e.value;
                }
                onChange(val);
                if (handleClick) {
                  handleClick(val);
                }

                if (onValueChange) {
                  await onValueChange(val, e);
                }
              }}
              value={
                value != undefined
                  ? options && options.find((c) => c.value === value)
                  : null
              }
              defaultValue={dv}
              {...props}
            />
          );
        }}
      />
      {errors && <ErrMsg isSmall>{`${errors.message}`}</ErrMsg>}
    </Wrapper>
  );
};

export default Component;

const Wrapper = styled.div`
  width: ${({ $width }) => ($width ? $width : "auto")};
`;

const HelpMsg = styled.div`
  display: inline-block;
  margin-top: 4px;
`;
const ErrMsg = styled(HelpMsg)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.red[400]};
`;

// Component.propTypes = {
//   name: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//       isDisabled: PropTypes.bool,
//     })
//   ),
//   defaultValue: PropTypes.string,
//   handleClick: PropTypes.func,
//   onValueChange: PropTypes.func,
//   width: PropTypes.string,
//   hasEmptyValue: PropTypes.bool,
// };
