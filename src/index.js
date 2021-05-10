import * as React from 'react';
import { useState } from 'react';
import { Button, Badge, Space } from 'antd';
// style
import './index.less'

const ExampleComponent = ({ children }, ref) => {
  const [count, setCount] = useState(0)

  // 对外暴露的方法
  React.useImperativeHandle(ref, () => ({
    setCount,
  }), []);

  return (
    <main>
      <Space>
        {children}
        <Badge count={count} />
        <Button onClick={_ => setCount(count + 1)}>+1</Button>
        <Button onClick={_ => setCount(0)}>Reset</Button>
      </Space>
    </main>
  );
}

export default React.forwardRef(ExampleComponent);
