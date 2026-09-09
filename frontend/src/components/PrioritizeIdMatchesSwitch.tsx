import { Form } from "react-bootstrap";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import { Dispatch, SetStateAction } from "react";
import { CustomTooltip } from "./CustomToolTip";

interface PrioritizeIdMatchesSwitchProps {
  prioritizeIdMatches: boolean;
  setPrioritizeIdMatches: Dispatch<SetStateAction<boolean>>;
  children: string;
}

export function PrioritizeIdMatchesSwitch({
  prioritizeIdMatches,
  setPrioritizeIdMatches,
  children,
}: PrioritizeIdMatchesSwitchProps) {
  return (
    <div className="d-flex align-items-center gap-1">
      <Form.Check
        type="switch"
        id="prioritize-ids-switch"
        className="mt-1"
        label="Prioritize ID matches"
        checked={prioritizeIdMatches}
        onChange={(e) => setPrioritizeIdMatches(e.currentTarget.checked)}
      />
      <CustomTooltip
        icon={<InfoIcon style={{ fontSize: 18, color: "grey" }} />}
      >
        {children}
      </CustomTooltip>
    </div>
  );
}
