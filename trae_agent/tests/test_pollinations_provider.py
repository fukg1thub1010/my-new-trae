from unittest.mock import patch, MagicMock

import pytest

from trae_agent.providers.pollinations import PollinationsClient


def test_missing_api_key_and_base_url():
    with patch.dict("os.environ", {}, clear=True):
        with pytest.raises(ValueError):
            PollinationsClient()


def test_chat_success_parses_response():
    with patch.dict("os.environ", {"POLLINATIONS_API_KEY": "k", "POLLINATIONS_BASE_URL": "https://api.pollinations.ai/v1"}):
        client = PollinationsClient()
        fake_resp = {
            "choices": [
                {"message": {"content": "Hello!"}}
            ]
        }
        with patch("httpx.Client") as Client:
            inst = MagicMock()
            Client.return_value.__enter__.return_value = inst
            inst.post.return_value.json.return_value = fake_resp
            inst.post.return_value.raise_for_status.return_value = None

            out = client.chat("Hi", model="pollinations/model")
            assert out == "Hello!"
            inst.post.assert_called()
