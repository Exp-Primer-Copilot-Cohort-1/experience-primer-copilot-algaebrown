function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsTextArray = memberSkillsText.split(" ");
    var memberSkillsTextArrayLength = memberSkillsTextArray.length;
    var memberSkillsTextArrayLast = memberSkillsTextArray[memberSkillsTextArrayLength - 1];
    var memberSkillsTextArrayLastNumber = parseInt(memberSkillsTextArrayLast);
    var memberSkillsTextArrayLastNumberPlus = memberSkillsTextArrayLastNumber + 1;
    var memberSkillsTextArrayLastNumberPlusString = memberSkillsTextArrayLastNumberPlus.toString();
    var memberSkillsTextArrayLastNumberPlusStringArray = memberSkillsTextArray;
    memberSkillsTextArrayLastNumberPlusStringArray[memberSkillsTextArrayLength - 1] = memberSkillsTextArrayLastNumberPlusString;
    var memberSkillsTextArrayLastNumberPlusStringArrayJoin = memberSkillsTextArrayLastNumberPlusStringArray.join(" ");
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinString = memberSkillsTextArrayLastNumberPlusStringArrayJoin.toString();
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArray = memberSkillsTextArrayLastNumberPlusStringArrayJoinString.split(" ");
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLength = memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArray.length;
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinus = memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLength - 1;
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinusString = memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinus.toString();
    var memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinusStringArray = memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArray;
    memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinusStringArray[memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinus] = memberSkillsTextArrayLastNumberPlusStringArrayJoinStringArrayLengthMinusString;
    var memberSkillsTextArrayLast