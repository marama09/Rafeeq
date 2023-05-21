import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export default function UserForm() {
  return <GetInTouchSimple />;
}

function GetInTouchSimple() {
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const form = useForm({
    initialValues: {
      interests: "",
      startDate: "",
      endDate: "",
      city: "",
    },
    validate: {
      // name: (value) => value.trim().length < 2,
      // email: (value) => !/^\S+@\S+$/.test(value),
      // subject: (value) => value.trim().length === 0,
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    // here where you can submit the values to the backen
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Title
        order={2}
        size="h1"
        pt="2rem"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        مرحباً بك في مرشد!
      </Title>

      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="الاهتمامات"
          placeholder="من فضلك ادخل اهتماماتك"
          name="interests"
          size="md"
          // variant="filled"
          {...form.getInputProps("interests")}
        />
        {/* <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps("email")}
        /> */}
      </SimpleGrid>

      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Select
          label="اختر مدينة"
          name="city"
          placeholder="اختر مدينة"
          searchable
          size="md"
          data={[
            { value: "Riyadh", label: "الرياض" },
            { value: "Abha", label: "أبها" },
            { value: "Al-Ahsa", label: "الأحساء" },
            { value: "Al-Baha", label: "الباحة" },
            { value: "Al-Hufuf", label: "الهفوف" },
            { value: "Al-Jawf", label: "الجوف" },
            { value: "Al-Khobar", label: "الخبر" },
            { value: "Al-Madinah", label: "المدينة المنورة" },
            { value: "Dammam", label: "الدمام" },
            { value: "Jeddah", label: "جدة" },
            { value: "Tabuk", label: "تبوك" },
          ]}
        />
      </SimpleGrid>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <DateInput
          value={startDate}
          name="startDate"
          onChange={setStartDate}
          label="الفترة من "
          placeholder="من"
          size="md"
          // maw={400}
          // mx="auto"
          {...form.getInputProps("startDate")}
        />
        <DateInput
          value={endDate}
          name="endDate"
          onChange={setEndDate}
          label="تنتهي "
          placeholder="إلى"
          size="md"
          // maw={400}
          // mx="auto"
          {...form.getInputProps("endDate")}
        />
      </SimpleGrid>
      {/* <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        size="md"
        // variant="filled"
        {...form.getInputProps("message")}
      /> */}

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          submit
        </Button>
      </Group>
    </form>
  );
}

