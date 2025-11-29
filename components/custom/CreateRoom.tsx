import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CreateRoom() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 mt-4">
      <Tabs defaultValue="account">
        <TabsList className="w-full">
          <TabsTrigger value="account">Create Room</TabsTrigger>
          <TabsTrigger value="password">Join Room</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Create Room</CardTitle>
              <CardDescription>
                Enter your name and room id to start the coding session.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Your Name</Label>
                <Input id="tabs-demo-name" placeholder="Enter Name" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Room ID</Label>
                <Input id="tabs-demo-username" placeholder="Enter Room Id" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create Room</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Join Room</CardTitle>
              <CardDescription>
                Enter your name and room id to start the coding session.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Your Name</Label>
                <Input
                  id="tabs-demo-current"
                  placeholder="Enter Name"
                  type="password"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Room ID</Label>
                <Input
                  id="tabs-demo-new"
                  placeholder="Enter Room ID"
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default">Join Room</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
