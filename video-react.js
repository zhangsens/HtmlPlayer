var Zplayer = React.createClass({
		render: function(){
			return (
				<div>
					<div className="fl">
						<Myvideo />
						<List />
					</div>
					<Controls />
				</div>
			)
		}
	})
        var Myvideo = React.createClass({
        	play: function(player) {
			//player.play();
			video.play();
        	},
        	pause: function(player) {
			//player.pause();
			video.pause();
        	},
		getInitialState: function() {
        		return {played: 0};
        	},
		ctrl:function(){
			//var player = document.getElementById('video');
			if(this.state.played){
				this.pause();
				this.state.played = 0;
			}else{
				this.play();
				this.state.played = 1;
			}
		},
        	render: function() {
        		return (
				<div className="video"><video id="video" src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/84_9ef80b410df47c8ba6478cbd4de3d610.mp4" controls onClick={this.ctrl}></video></div>
			);
        	}
	});

	var List = React.createClass({
		render:function(){
			return (
				<div className="list">list</div>
			);
		}
	});

	var Controls = React.createClass({
		render:function(){
			return (
				<div className="controls fl">
					<div className="play">play</div>
					<div className="timeline"></div>
					<div className="sound">sound</div>
					<div className="fullscreen">fullscreen</div>
				</div>
			);
		}
	});

      ReactDOM.render(
        <Zplayer />,
        document.getElementById('player')
      );