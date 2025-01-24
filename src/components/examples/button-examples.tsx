"use client";

import Button from "@/components/ui/button/button";
import ButtonGroup from "@/components/ui/button-group/button-group";

export default function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Basic Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Basic Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button isDisabled>Disabled Button</Button>
          <Button isLoading spinnerColor="white">Loading Button</Button>
          <Button as="a" href="/some-path">Link Button</Button>
        </div>
      </section>

      {/* Button Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Colors</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="neutral">Neutral</Button>
          <Button color="error">Error</Button>
          <Button color="warning">Warning</Button>
          <Button color="success">Success</Button>
        </div>
      </section>

      {/* Button Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="flat">Flat</Button>
          <Button variant="light">Light</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="2xl">2XL</Button>
        </div>
      </section>

      {/* Button Rounded Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Rounded Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button rounded="none">Square</Button>
          <Button rounded="sm">Small Rounded</Button>
          <Button rounded="md">Medium Rounded</Button>
          <Button rounded="lg">Large Rounded</Button>
          <Button rounded="xl">XL Rounded</Button>
          <Button rounded="2xl">2XL Rounded</Button>
          <Button rounded="full">Full Rounded</Button>
        </div>
      </section>

      {/* Button Groups */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Groups</h2>
        <div className="flex flex-wrap gap-4">
          {/* Basic Group */}
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>

          {/* Colored Group */}
          <ButtonGroup>
            <Button color="primary">Left</Button>
            <Button color="primary">Middle</Button>
            <Button color="primary">Right</Button>
          </ButtonGroup>

          {/* Outlined Group */}
          <ButtonGroup>
            <Button variant="outline" color="primary">Left</Button>
            <Button variant="outline" color="primary">Middle</Button>
            <Button variant="outline" color="primary">Right</Button>
          </ButtonGroup>

          {/* Different Rounded Corners */}
          <ButtonGroup rounded="full">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>

          {/* Mixed Variants */}
          <ButtonGroup>
            <Button variant="light" color="primary">Light</Button>
            <Button variant="primary" color="primary">Primary</Button>
            <Button variant="outline" color="primary">Outline</Button>
          </ButtonGroup>

          {/* With Loading State */}
          <ButtonGroup>
            <Button>Normal</Button>
            <Button isLoading>Loading</Button>
            <Button isDisabled>Disabled</Button>
          </ButtonGroup>
        </div>
      </section>

      {/* Complex Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Complex Examples</h2>
        <div className="space-y-4">
          {/* Mixed Colors and States */}
          <div className="flex flex-wrap gap-4">
            <Button 
              color="primary"
              variant="outline"
              size="lg"
              rounded="full"
            >
              Custom Button
            </Button>
            <Button
              color="success"
              variant="light"
              size="lg"
              isLoading
            >
              Processing...
            </Button>
            <Button
              as="a"
              href="#"
              color="info"
              variant="ghost"
              size="lg"
            >
              Learn More
            </Button>
          </div>

          {/* Complex Button Group */}
          <ButtonGroup rounded="xl">
            <Button 
              variant="outline" 
              color="primary"
              size="lg"
            >
              Previous
            </Button>
            <Button
              variant="primary"
              color="primary"
              size="lg"
            >
              Current
            </Button>
            <Button
              variant="outline"
              color="primary"
              size="lg"
              isDisabled
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  );
} 