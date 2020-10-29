import React, { useState } from "react";
import { Button, Card, message, Radio, Typography } from "antd";

const { Title } = Typography;

const Question = ({ question, current, next, total }) => {
  const [value, setValue] = useState(undefined);
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      <Card className="question">
        <Title level={4}>{question.title}</Title>
        <Radio.Group
          onChange={onChange}
          value={value}
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          {(question.choices || []).map((choice) => (
            <Radio key={choice} style={radioStyle} value={choice}>
              {choice}
            </Radio>
          ))}
        </Radio.Group>
      </Card>
      <div className="steps-action">
        {current < total - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === total - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};

export default Question;
