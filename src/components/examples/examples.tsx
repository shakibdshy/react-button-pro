"use client";
import Button from "@/components/ui/button/button";
import GroupButton from "@/components/ui/button-group/button-group";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export default function ButtonPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="my-5">
          <h2 className="mb-5 font-bold uppercase">Button Component</h2>
          <h3 className="mb-5">Default</h3>
          <Button>Button</Button>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Disable</h3>
          <div className="flex items-center gap-5">
            <Button isDisabled>Button Disable</Button>
            <Button isDisabled color="secondary">
              Button Disable
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Size</h3>
          <div className="flex items-center gap-5">
            <Button size="sm">Button sm</Button>
            <Button size="md">Button md</Button>
            <Button size="lg">Button lg</Button>
            <Button size="xl">Button xl</Button>
            <Button size="2xl">Button 2xl</Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Color</h3>
          <div className="flex items-center gap-5">
            <Button>Button Primary</Button>
            <Button color="secondary">Button Secondary</Button>
            <Button color="neutral">Button Neutral</Button>
            <Button color="info">Button Info</Button>
            <Button color="error">Button Error</Button>
            <Button color="warning">Button Warning</Button>
            <Button color="success">Button Success</Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Variant</h3>
          <div className="flex items-center gap-5">
            <Button color="neutral">Primary</Button>
            <Button color="neutral" variant="outline">
              Outline
            </Button>
            <Button color="neutral" variant="flat">
              Flat
            </Button>
            <Button color="neutral" variant="light">
              Light
            </Button>
            <Button color="neutral" variant="ghost">
              Ghost
            </Button>
            <Button color="neutral" variant="text">
              Text
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Link Button</h3>
          <div className="flex items-center gap-5">
            <Button as="a" href="#" target="_blank" color="info">
              <IconArrowNarrowLeft stroke={2} /> Left Icon
            </Button>
            <Button variant="outline" color="info">
              Right Icon
              <IconArrowNarrowRight stroke={2} />
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">With Icon</h3>
          <div className="flex items-center gap-5">
            <Button color="info">
              <IconArrowNarrowLeft stroke={2} /> Left Icon
            </Button>
            <Button variant="outline" color="info">
              Right Icon
              <IconArrowNarrowRight stroke={2} />
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Only Icon</h3>
          <div className="flex items-center gap-5">
            <Button color="info" size="lg">
              <IconArrowNarrowLeft stroke={2} />
            </Button>
            <Button variant="outline" color="info" size="lg">
              <IconArrowNarrowRight stroke={2} />
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Custom Button</h3>
          <div className="flex items-center gap-5">
            <Button
              rounded="full"
              className="border-transparent hover:border-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
            >
              Button
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Loading Spinner</h3>
          <div className="flex items-center gap-5">
            <Button isLoading spinnerColor="white">
              Loading...
            </Button>
            <Button variant="outline" isLoading color="neutral">
              Processing...
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Custom Loading Animation</h3>
          <div className="flex items-center gap-5">
            <Button
              isLoading
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Loading ...
            </Button>
          </div>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Group Button</h3>
          <GroupButton>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </GroupButton>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Mixed Style</h3>
          <GroupButton>
            <Button color="secondary">Left</Button>
            <Button color="info">Middle</Button>
            <Button color="error">Right</Button>
          </GroupButton>
        </div>

        <div className="py-5">
          <h3 className="mb-5">Group Outline</h3>
          <GroupButton>
            <Button variant="ghost" color="info">
              Left
            </Button>
            <Button variant="ghost" color="info">
              Middle
            </Button>
            <Button variant="ghost" color="info">
              Right
            </Button>
          </GroupButton>
        </div>
      </div>
    </section>
  );
}
