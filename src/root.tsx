import { Button, Flex } from "./components";

export default function Root() {
  return (
    <div>
      <Flex>
        <Flex>
          <Button type="primary">Primary Button</Button>
          <Button >Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
        <Flex>
          <Button type="primary">Primary Button</Button>
          <Button >Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
      </Flex>
    </div>
  )
}