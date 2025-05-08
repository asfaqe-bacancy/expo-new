import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Button, Platform, ScrollView, StyleSheet, View } from "react-native";

// Import SwiftUI components
import {
  BottomSheet,
  ColorPicker,
  Gauge,
  LinearProgress,
  Button as SwiftUIButton,
  DateTimePicker as SwiftUIDateTimePicker,
  Picker as SwiftUIPicker,
  Switch as SwiftUISwitch,
  TextInput as SwiftUITextInput,
} from "@expo/ui/swift-ui";

// Import Jetpack Compose components
import {
  Button as ComposeButton,
  DateTimePicker as ComposeDateTimePicker,
  Picker as ComposePicker,
  TextInput as ComposeTextInput,
} from "@expo/ui/jetpack-compose";

export default function NativeUIScreen() {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [date, setDate] = useState(new Date());
  const [progress, setProgress] = useState(0.5);
  const [segmentedValue, setSegmentedValue] = useState("option1");
  const [wheelValue, setWheelValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [textValue, setTextValue] = useState("");

  // Options for pickers
  const segmentedOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const wheelOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Expo UI Native Components</ThemedText>
        <ThemedText>SDK 53 Demo</ThemedText>
      </ThemedView>

      {Platform.OS === "ios" && (
        <>
          <Collapsible title="SwiftUI Components">
            <ThemedText style={styles.description}>
              These components are built with SwiftUI and are available on iOS
              devices.
            </ThemedText>
          </Collapsible>

          <Collapsible title="BottomSheet">
            <ThemedText style={styles.description}>
              A native bottom sheet component with smooth animations.
            </ThemedText>
            <SwiftUIButton
              title="Show Bottom Sheet"
              onPress={() => setBottomSheetVisible(true)}
              style={styles.button}
            />
            <Button
              title="Show Bottom Sheet"
              onPress={() => setBottomSheetVisible(true)}
              style={styles.button}
            />
            <BottomSheet
              isOpened={true}
              //   visible={isBottomSheetVisible}/
              onDismiss={() => setBottomSheetVisible(false)}
              detents={["medium", "large"]}
            >
              <View style={styles.bottomSheetContent}>
                <ThemedText type="title">Bottom Sheet</ThemedText>
                <ThemedText>This is a native SwiftUI bottom sheet.</ThemedText>
                <SwiftUIButton
                  title="Close"
                  onPress={() => setBottomSheetVisible(false)}
                  style={styles.button}
                />
              </View>
            </BottomSheet>
          </Collapsible>

          <Collapsible title="ColorPicker">
            <ThemedText style={styles.description}>
              A native color picker component.
            </ThemedText>
            <ColorPicker
              color={selectedColor}
              onChange={setSelectedColor}
              style={styles.colorPicker}
            />
            <View
              style={[styles.colorPreview, { backgroundColor: selectedColor }]}
            />
          </Collapsible>

          <Collapsible title="DateTimePicker">
            <ThemedText style={styles.description}>
              A native date and time picker.
            </ThemedText>
            <SwiftUIDateTimePicker
              value={date}
              onChange={setDate}
              mode="date"
              style={styles.datePicker}
            />
            <ThemedText>Selected: {date.toLocaleDateString()}</ThemedText>
          </Collapsible>

          <Collapsible title="Gauge">
            <ThemedText style={styles.description}>
              A native gauge component to display progress.
            </ThemedText>
            <Gauge
              value={progress}
              style={styles.gauge}
              minimumValue={0}
              maximumValue={1}
            />
            <SwiftUIButton
              title="Update Gauge"
              onPress={() => setProgress(Math.random())}
              style={styles.button}
            />
          </Collapsible>

          <Collapsible title="LinearProgress">
            <ThemedText style={styles.description}>
              A native linear progress indicator.
            </ThemedText>
            <LinearProgress value={progress} style={styles.linearProgress} />
            <SwiftUIButton
              title="Update Progress"
              onPress={() => setProgress(Math.random())}
              style={styles.button}
            />
          </Collapsible>

          <Collapsible title="Picker (Segmented)">
            <ThemedText style={styles.description}>
              A native segmented control.
            </ThemedText>
            <SwiftUIPicker
              selectedValue={segmentedValue}
              onValueChange={setSegmentedValue}
              options={segmentedOptions}
              style={styles.segmentedPicker}
              type="segmented"
            />
            <ThemedText>Selected: {segmentedValue}</ThemedText>
          </Collapsible>

          <Collapsible title="Picker (Wheel)">
            <ThemedText style={styles.description}>
              A native wheel picker.
            </ThemedText>
            <SwiftUIPicker
              selectedValue={wheelValue}
              onValueChange={setWheelValue}
              options={wheelOptions}
              style={styles.wheelPicker}
              type="wheel"
            />
            <ThemedText>Selected: {wheelValue}</ThemedText>
          </Collapsible>

          <Collapsible title="Switch">
            <ThemedText style={styles.description}>
              A native switch component.
            </ThemedText>
            <SwiftUISwitch
              value={switchValue}
              onValueChange={setSwitchValue}
              style={styles.switch}
            />
            <ThemedText>Switch is {switchValue ? "ON" : "OFF"}</ThemedText>
          </Collapsible>

          <Collapsible title="Switch (Checkbox)">
            <ThemedText style={styles.description}>
              A native checkbox component.
            </ThemedText>
            <SwiftUISwitch
              value={checkboxValue}
              onValueChange={setCheckboxValue}
              style={styles.checkbox}
              type="checkbox"
            />
            <ThemedText>
              Checkbox is {checkboxValue ? "CHECKED" : "UNCHECKED"}
            </ThemedText>
          </Collapsible>

          <Collapsible title="TextInput">
            <ThemedText style={styles.description}>
              A native text input component.
            </ThemedText>
            <SwiftUITextInput
              value={textValue}
              onChangeText={setTextValue}
              placeholder="Enter text here"
              style={styles.textInput}
            />
            <ThemedText>Text: {textValue}</ThemedText>
          </Collapsible>
        </>
      )}

      {Platform.OS === "android" && (
        <>
          <Collapsible title="Jetpack Compose Components">
            <ThemedText style={styles.description}>
              These components are built with Jetpack Compose and are available
              on Android devices.
            </ThemedText>
          </Collapsible>

          <Collapsible title="Button">
            <ThemedText style={styles.description}>
              A native Jetpack Compose button.
            </ThemedText>
            <ComposeButton
              title="Press Me"
              onPress={() => alert("Button pressed!")}
              style={styles.button}
            />
          </Collapsible>

          <Collapsible title="DateTimePicker">
            <ThemedText style={styles.description}>
              A native date and time picker.
            </ThemedText>
            <ComposeDateTimePicker
              value={date}
              onChange={setDate}
              mode="date"
              style={styles.datePicker}
            />
            <ThemedText>Selected: {date.toLocaleDateString()}</ThemedText>
          </Collapsible>

          <Collapsible title="Picker">
            <ThemedText style={styles.description}>
              A native dropdown picker.
            </ThemedText>
            <ComposePicker
              selectedValue={wheelValue}
              onValueChange={setWheelValue}
              options={wheelOptions}
              style={styles.picker}
            />
            <ThemedText>Selected: {wheelValue}</ThemedText>
          </Collapsible>

          <Collapsible title="TextInput">
            <ThemedText style={styles.description}>
              A native text input component.
            </ThemedText>
            <ComposeTextInput
              value={textValue}
              onChangeText={setTextValue}
              placeholder="Enter text here"
              style={styles.textInput}
            />
            <ThemedText>Text: {textValue}</ThemedText>
          </Collapsible>
        </>
      )}

      <View style={styles.footer}>
        <ThemedText>
          Note: This demo showcases the new native UI components in Expo SDK 53.
          Some components are platform-specific.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/ui/">
          <ThemedText type="link">View Documentation</ThemedText>
        </ExternalLink>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
    marginTop: 60,
  },
  description: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
  },
  bottomSheetContent: {
    padding: 16,
    alignItems: "center",
    gap: 16,
  },
  colorPicker: {
    height: 200,
    marginVertical: 16,
  },
  colorPreview: {
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
  },
  datePicker: {
    marginVertical: 16,
  },
  gauge: {
    height: 100,
    marginVertical: 16,
  },
  linearProgress: {
    height: 8,
    marginVertical: 16,
  },
  segmentedPicker: {
    marginVertical: 16,
  },
  wheelPicker: {
    height: 150,
    marginVertical: 16,
  },
  switch: {
    marginVertical: 16,
  },
  checkbox: {
    marginVertical: 16,
  },
  textInput: {
    height: 40,
    marginVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  picker: {
    height: 50,
    marginVertical: 16,
  },
  footer: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: "center",
  },
});
