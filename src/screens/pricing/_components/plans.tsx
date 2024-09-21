import { Button } from "@/components/ui"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowRight } from "lucide-react"

export const Plans = () => {
  return (
    <div className="space-y-12 ">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
        <div className="text-center">
          <h3 className="max-w-4xl text-balance text-2xl font-semibold !leading-[1.3] text-primary md:text-4xl lg:text-pretty lg:text-5xl">
            Friendly Pricing Plans
          </h3>
          <p className="max-w-lg text-sm  md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg  [&_tr]:h-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="text-start"></TableCell>
              <TableCell className="text-center">
                <div className="">
                  <p className="text-sm font-semibold">Lite Plan</p>
                  <p className="text-2xl font-medium md:text-4xl">
                    $19
                    <span className="text-sm text-muted-foreground">
                      /month
                    </span>
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <p className="text-sm font-semibold">Lite Plan</p>
                <p className="text-2xl font-medium md:text-4xl">
                  $19
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
              </TableCell>
              <TableCell className="text-center">
                <p className="text-sm font-semibold">Lite Plan</p>
                <p className="text-2xl font-medium md:text-4xl">
                  $19
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableHeader className="bg-primary/10">
            <TableRow className="border-x">
              <TableHead className="w-1/4 text-start">Audience</TableHead>
              <TableHead className="w-1/4 text-center">Basic plan</TableHead>
              <TableHead className="w-1/4 text-center">Pro plan</TableHead>
              <TableHead className="w-1/4 text-center">Premium plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-x">
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
          </TableBody>
          <TableHeader className="bg-primary/10 ">
            <TableRow className="border-x border-t">
              <TableHead className="text-start">Automation & emails</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Method</TableHead>
              <TableHead className="text-center">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-x">
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-start">Manage subscribers</TableCell>
              <TableCell className="text-center">Lorem</TableCell>
              <TableCell className="text-center">Ipsum</TableCell>
              <TableCell className="text-center">Dolor</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow>
              <TableCell className="text-start"></TableCell>
              <TableCell className="text-center">
                <Button className="mt-4 w-full max-w-lg rounded-full text-background md:max-w-full">
                  Start a Free Trial <ArrowRight className="ml-4 size-4" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant={"outline"}
                  className="mt-4 w-full max-w-lg rounded-full border-primary/30 bg-primary/40 hover:bg-primary/50 md:max-w-full"
                >
                  Start a Free Trial <ArrowRight className="ml-4 size-4" />
                </Button>
              </TableCell>
              <TableCell className="text-center">
                <Button
                  variant={"outline"}
                  className="mt-4 w-full max-w-lg rounded-full border-primary/30 bg-primary/40 hover:bg-primary/50 md:max-w-full"
                >
                  Start a Free Trial <ArrowRight className="ml-4 size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
