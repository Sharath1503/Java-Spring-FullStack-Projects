<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@page isELIgnored="false" %>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form method="post" action="/StudentManagementMVC/student/updatesave">
<input type="hidden" name="id" value="${student.id }">
<input type="text" name="sname" value="${student.sname }" required="required">
<input type="text" name="roll" value="${student.roll }" required="required">
<input type="text" name="age" value="${student.age }" required="required">
<input type="submit">
</form>
</body>
</html>