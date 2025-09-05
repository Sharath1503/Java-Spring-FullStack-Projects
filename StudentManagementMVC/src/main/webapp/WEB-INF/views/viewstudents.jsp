<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<%@ page isELIgnored="false"%>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Roll</th>
			<th>Age</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
		<c:forEach var="student" items="${studentslist}">
			<tr>
				<td>${student.id}</td>
				<td>${student.sname}</td>
				<td>${student.roll}</td>
				<td>${student.age}</td>
				<td><a href="editstudent/${student.id}">Edit</a></td>
				<td><a href="delete/${student.id}">Delete</a></td>

			</tr>
		</c:forEach>



	</table>
</body>
</html>