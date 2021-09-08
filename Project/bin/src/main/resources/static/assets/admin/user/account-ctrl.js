app.controller("account-ctrl", function($scope,  $http) {
	$scope.items = [];
	$scope.cates = [];
	$scope.form = {};
	
	$scope.initialize = function() {
		//Load dữ liệu
		$http.get("/rest/accounts/all_user").then(resp => {
			$scope.items = resp.data;
		});
	}
	
	//Khỏi đầu
	$scope.initialize();
	
	//Xóa form
	$scope.reset = function() {
		$scope.form = {
			photo: 'cloud-upload.jpg',
		}
	}
	
	//Hiện thị lên form
	$scope.edit = function(item) {
		$scope.form = angular.copy(item);
		$(".nav-tabs a:eq(0)").tab('show')
		
	}
	
	//Thêm sản phẩm mới
	$scope.create = function() {
		var item = angular.copy($scope.form);
		$http.post(`/rest/accounts`, item).then(resp => {
			resp.data.createDate = new Date(resp.data.createDate)
			$scope.items.push(resp.data);
			$scope.reset();
			alert("Thêm tài khoản thành công")
		}).catch(error => {
			alert("Lỗi thêm tài khoản");
			console.log("Error", error);
		});
	}
	
	//cập nhật sản phẩm
	$scope.update = function() {
		var item = angular.copy($scope.form);
		$http.put(`/rest/accounts/${item.username}`, item).then(resp => {
			var index = $scope.items.findIndex(p => p.username == item.username);
			$scope.items[index] = item;
			alert("Cập nhật tài khoản thành công")
		}).catch(error => {
			alert("Lỗi cập nhật tài khoản");
			console.log("Error", error);
		});
	}
	
	//Xóa sản phẩm
	$scope.delete = function(item) {
		$http.delete(`/rest/accounts/${item.username}`).then(resp => {
			var index = $scope.items.findIndex(p => p.username == item.username);
			$scope.items.splice(index, 1);
			$scope.reset();
			alert("Xóa tài khoản thành công");
		}).catch(error => {
			alert("Lỗi xóa tài khoản");
			console.log("Error", error);
		});
	}
	
	//Úp hình
	$scope.imageChanged = function(files) {
		var data = new FormData();
		data.append('file', files[0]);
		$http.post('/rest/upload/images', data, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		}).then(resp => {
			$scope.form.photo = resp.data.name;
		}).catch(error => {
			alert("Lỗi hình upload");
			console.log("Error", error);
		})
	}
	
	$scope.pager = {
		page: 0,
		size: 10,
		get items() {
			var start = this.page * this.size;
			return $scope.items.slice(start, start + this.size);
		},
		get count() {
			return Math.ceil(1.0 * $scope.items.length / this.size);
	},
		first() {
			this.page = 0;
		},
		prev() {
			this.page--;
			if(this.page < 0) {
				this.last();
			}
		},
		next() {
			this.page++;
			if(this.page >= this.count) {
				this.first();
			}
		},
		last() {
			this.page = this.count - 1;
		},
	}
	$scope.timkiemUsername = function() {
		var item = angular.copy($scope.form);
		$http.get(`/rest/accounts/timkiemUsername/${item.username}`).then(resp => {
			$scope.items = angular.copy(resp.data);
		})
	}
	
	$scope.timkiemAll = function() {
		var item = angular.copy($scope.form);
		$http.get(`/rest/accounts/all_user`).then(resp => {
			$scope.items = angular.copy(resp.data);
		})
	}
});