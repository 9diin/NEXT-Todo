"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    Calendar,
    Card,
    Checkbox,
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
    Input,
    Separator,
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
} from "@/src/components/ui";
import { Plus } from "lucide-react";

export default function Home() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
        from: new Date(2025, 11, 1),
        to: new Date(2025, 12, 24),
    });

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <main className="w-120 h-240 bg-white rounded-lg shadow-xs">
                <Tabs defaultValue="tasks" className="w-full h-full">
                    <TabsList className="w-full h-11 min-h-11">
                        <TabsTrigger value="messages">메시지</TabsTrigger>
                        <TabsTrigger value="tasks">오늘의 할 일</TabsTrigger>
                        <TabsTrigger value="activities">지난 활동</TabsTrigger>
                    </TabsList>
                    <TabsContent value="messages">Make changes to your account here.</TabsContent>
                    <TabsContent value="tasks" className="h-full flex flex-col p-6 gap-6 bg-neutral-50 rounded-lg">
                        {/* 타이틀, 날짜 그리고 테스크 생성 버튼 섹션 */}
                        <section className="w-full flex items-center justify-between">
                            <div className="flex flex-col">
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">오늘의 할 일</h4>
                                <p className="text-neutral-500">2025년 12월 24일 수요일</p>
                            </div>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className="py-5 border border-blue-200 text-blue-500 bg-blue-100 hover:bg-blue-100">
                                        <Plus />할 일 생성
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="w-full md:max-w-xl">
                                    <SheetHeader>
                                        <SheetTitle>새로운 할 일 만들기</SheetTitle>
                                        <SheetDescription>해야 할 일을 추가하고 관리해 보세요.</SheetDescription>
                                    </SheetHeader>
                                    <div className="w-full px-4">
                                        <FieldSet>
                                            <FieldGroup>
                                                <Field>
                                                    <FieldLabel htmlFor="period">일정</FieldLabel>
                                                    <Calendar mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={setDateRange} numberOfMonths={2} className="rounded-lg border shadow-sm" />
                                                </Field>
                                                <Field>
                                                    <FieldLabel htmlFor="title">제목</FieldLabel>
                                                    <Input id="title" type="text" placeholder="제목을 입력하세요." />
                                                </Field>
                                                <Field>
                                                    <FieldLabel htmlFor="decription">내용</FieldLabel>
                                                    <Textarea id="decription" placeholder="해야 할 일을 작성해주세요." rows={8} className="h-60" />
                                                </Field>
                                            </FieldGroup>
                                        </FieldSet>
                                    </div>
                                    <SheetFooter>
                                        <Button type="submit">저장 or 등록</Button>
                                        <SheetClose asChild>
                                            <Button variant="outline">닫기</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </section>
                        {/* 뱃지 섹션 */}
                        <section className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500 font-medium">전체</span>
                                <Badge className="bg-blue-500">35</Badge>
                            </div>
                            <Separator orientation="vertical" className="h-3!" />
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-n">진행</span>
                                    <Badge className="bg-neutral-300">35</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-500">만료</span>
                                    <Badge className="bg-neutral-300">35</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-500">달성</span>
                                    <Badge className="bg-neutral-300">35</Badge>
                                </div>
                            </div>
                        </section>
                        {/* 테스크 목록 섹션 */}
                        <section className="flex flex-col gap-4 overflow-y-scroll">
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 gap-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Client Review & Feedback</h4>
                                        <p>Crypto Wallet Resign</p>
                                    </div>
                                    <Checkbox className="w-7 h-7 mt-1.25 rounded-full" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-neutral-500">Today</span>
                                        <span className="text-neutral-400">10:00pm ~ 11:45pm</span>
                                    </div>
                                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                            <AvatarFallback>LR</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </Card>
                        </section>
                    </TabsContent>
                    <TabsContent value="activities">Make changes to your account here.</TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
